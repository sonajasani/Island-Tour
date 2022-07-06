from flask import Blueprint, jsonify, session, request, redirect
from app.models import db, Resort
from app.forms import ResortForm
from flask_login import login_required, current_user
from .utils import validation_errors_to_error_messages


resort_routes = Blueprint('resorts', __name__)
