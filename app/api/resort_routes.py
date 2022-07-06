from flask import Blueprint, jsonify, session, request, redirect
from app.models import db, Resort
from app.forms import ResortForm
from flask_login import login_required, current_user
from datetime import datetime
from .utils import validation_errors_to_error_messages


resort_routes = Blueprint('resorts', __name__)

###############################################################################################
                    # GET ALL RESORTS #
###############################################################################################

@resort_routes.route('')
@login_required
def all_resorts():
    resorts = Resort.query.all()
    return {'resorts': resort.to_dict() for resort in resorts}


###############################################################################################
                    # GET A RESORT #
###############################################################################################

@resort_routes.route('/<int:id>')
@login_required
def single_resort(id):
    resort = Resort.query.get(id)
    if resort:
        return resort.to_dict()
    else:
        return 'Resort not found'


###############################################################################################
                    # POST A RESORT #
###############################################################################################

@resort_routes.route('/new', methods=['POST'])
@login_required
def new_resort():
    form = ResortForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_resort = Resort(
            name=data['name'],
            island=data['island'],
            country=data['country'],
            continent=data['continent'],
            description=data['description'],
            user_id=current_user.to_dict()['id'],
            price=data['price'],
            minibar=data['minibar'],
            gym=data['gym'],
            spa=data['spa'],
            jacuzzi=data['bathrooms'],
            pool=data['pool'],
            room_service=data['room_service'],
            fire_place=data['fire_place'],
            wifi=data['wifi'],
            workspace=data['workspace'],
            water_sports=data['water_sports'],
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow()
        )

        db.session.add(new_resort)
        db.session.commit()
        return new_resort.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


###############################################################################################
                    # EDIT A RESORT #
###############################################################################################

@resort_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_resort(id):
    resort = Resort.query.get(id)
    form = ResortForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        resort.name=data['name'],
        resort.island=data['island'],
        resort.country=data['country'],
        resort.continent=data['continent'],
        resort.description=data['description'],
        resort.price=data['price'],
        resort.minibar=data['minibar'],
        resort.gym=data['gym'],
        resort.spa=data['spa'],
        resort.jacuzzi=data['bathrooms'],
        resort.pool=data['pool'],
        resort.room_service=data['room_service'],
        resort.fire_place=data['fire_place'],
        resort.wifi=data['wifi'],
        resort.workspace=data['workspace'],
        resort.water_sports=data['water_sports'],
        resort.created_at=datetime.utcnow(),
        resort.updated_at=datetime.utcnow()

        db.session.commit()
        return resort.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


###############################################################################################
                    # DELETE A RESORT #
###############################################################################################

@resort_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_resort(id):
    resort = Resort.query.get(id)
    db.session.delete(resort)
    db.session.commit()
    return "Resort deleted successfully"