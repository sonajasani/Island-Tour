from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms import ReviewForm
from .utils import validation_errors_to_error_messages

review_routes = Blueprint('reviews', __name__)


# Route provides all avaialble reviews
@review_routes.route('')
def all_reviews():
    reviews = Review.query.all()
    return {review.id: review.to_dict() for review in reviews}


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
            review=data['review']
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Route updates a review for the selected resort
@review_routes.route('/<int:review_id>', methods=['PUT'])
@login_required
def update_review(review_id):
    print('-----------------------------------ENTRY-----------------------------------')
    review = Review.query.get(review_id)
    form = ReviewForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    print('-----------------------------------MIDDLE-----------------------------------')

    if form.validate_on_submit():
        review.rating = data['rating'],
        review.review = data['review']
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@review_routes.route('/<int:review_id>', methods=['DELETE'])
@login_required
def delete_review(review_id):
    # print('-----------------------------------ENTRY-----------------------------------')
    # print(review_id)
    review = Review.query.get(review_id)
    # print(review)
    db.session.delete(review)
    db.session.commit()
    return review.to_dict()
