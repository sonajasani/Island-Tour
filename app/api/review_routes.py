from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms import ReviewForm
from datetime import datetime
from .utils import validation_errors_to_error_messages

review_routes = Blueprint('reviews', __name__)


###############################################################################################
                    # GET ALL REVIEWS #
###############################################################################################

# Route provides all avaialble reviews
@review_routes.route('')
def all_reviews():
    reviews = Review.query.all()
    return {review.id: review.to_dict() for review in reviews}


###############################################################################################
                    # POST A RESORT #
###############################################################################################

# Route creates a new review
@review_routes.route('/<int:resort_id>/new', methods=['POST'])
@login_required
def new_review(resort_id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    if form.validate_on_submit():
        new_review = Review(
            user_id=current_user.to_dict()['id'],
            resort_id=resort_id,
            rating=data['rating'],
            comment=data['comment'],
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow()
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


###############################################################################################
                    # EDIT A REVIEW #
###############################################################################################

# Route updates a review for the selected spot
@review_routes.route('/<int:review_id>', methods=['PUT'])
@login_required
def update_review(review_id):
    review = Review.query.get(review_id)
    form = ReviewForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']
   
    if form.validate_on_submit():
        review.rating = data['rating'],
        review.comment = data['comment'],
        review.created_at=datetime.utcnow(),
        review.updated_at=datetime.utcnow()

        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


###############################################################################################
                    # DELETE A REVIEW #
###############################################################################################

@review_routes.route('/<int:review_id>', methods=['DELETE'])
@login_required
def delete_review(review_id):
    
    review = Review.query.get(review_id)

    db.session.delete(review)
    db.session.commit()
    return review.to_dict()