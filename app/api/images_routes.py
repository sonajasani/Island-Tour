from flask import Blueprint, request
from flask_login import login_required, current_user
from app.aws3 import (upload_file_to_s3, allowed_file, get_unique_filename)
from .utils import validation_errors_to_error_messages
from app.models import ResortImage, db


image_routes = Blueprint('images', __name__)


###############################################################################################
                    # GET ALL RESORT IMAGES #
###############################################################################################

@image_routes.route('')
def all_images():
  images = ResortImage.query.all()

  return {image.id: image.to_dict() for image in images }


###############################################################################################
                    # POST RESORT IMAGES #
###############################################################################################

@image_routes.route("/upload", methods=["POST"])
@login_required
def upload_image():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.name = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)
  
    if "url" not in upload:
 
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    resort_id = request.form.get("resort_id")
    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_image = ResortImage(resort_id=resort_id, url=url)
    db.session.add(new_image)
    db.session.commit()
    return {"url": url}