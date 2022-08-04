from flask import Blueprint
from flask_login import login_required
import os
from sqlalchemy import text

map_routes = Blueprint('map', __name__)


@map_routes.route('/key', methods=['POST'])
def load_map_key():
    key = os.environ.get('MAP_API_KEY')
    print(key, "......key............")
    return {'googleMapsAPIKey': key}