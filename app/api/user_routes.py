from distutils import errors
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db
from ..forms.edit_user_form import EditUserForm
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)
from .utils import validation_errors_to_error_messages

user_routes = Blueprint('users', __name__)



def error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for err in validation_errors[field]:
            errorMessages.append(f'{field}: {err}')
    return errorMessages



@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/edit/<int:user_id>', methods=["PUT"])
def update_user(user_id):
    user = User.query.get(user_id)

    url = None
    
    if user.id == int(user_id):
        form = EditUserForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        
        if form.validate_on_submit():
            # TODO AWS S3 Bucket Upload Start - profile_image_url
            if request.files:
                image = request.files["photo"]
                if not allowed_file(image.filename):
                    return {"errors": "file type not permitted"}, 400
                image.filename = get_unique_filename(image.filename)
                upload = upload_file_to_s3(image)
                if "url" not in upload:
                        return upload, 400
                url = upload["url"]
            # TODO AWS S3 Bucket Upload End - profile_image_url

            user.username = form.data['username']
            user.email = form.data['email']
            user.bio = form.data['bio']
            user.first_name = form.data['first_name']
            user.last_name= form.data['last_name']
            user.photo = None if url is None else url
            db.session.commit()
            return user.to_dict(), 201
    

    print(form.errors, "..............form error.................")
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400





@user_routes.route('/delete/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):

    user = User.query.get(user_id)
    if user == current_user:
        print(user, "................user in del user...............")
        db.session.delete(user)
        db.session.commit()
    return user.to_dict()