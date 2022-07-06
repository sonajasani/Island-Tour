from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User
from app.models import User, db
from ..forms.edit_user_form import EditUserForm

user_routes = Blueprint('users', __name__)

######################################################################################################
                        # Validation Errors #
######################################################################################################

def error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for err in validation_errors[field]:
            errorMessages.append(f'{field}: {err}')
    return errorMessages


######################################################################################################
                        # GET ALL USERS #
######################################################################################################

@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


######################################################################################################
                        # GET A USER #
######################################################################################################

@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


######################################################################################################
                        # UPDATE A USER #
######################################################################################################






######################################################################################################
                        # DELETE A USER #
######################################################################################################

@user_routes.route('/delete/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):

    user = User.query.get(user_id)
    if user == current_user:
        db.session.delete(user)
        db.session.commit()
    return user.to_dict()