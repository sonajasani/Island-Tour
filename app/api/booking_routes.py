from app.forms.bookings_form import BookingForm
from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Booking, db
from datetime import datetime
from .utils import validation_errors_to_error_messages

booking_routes = Blueprint('bookings', __name__)

###############################################################################################
                    # GET ALL BOOKINGS #
###############################################################################################

# Route provides all avaialble bookings
@booking_routes.route('')
def all_bookings():
    bookings = Booking.query.all()
    return {booking.id: booking.to_dict() for booking in bookings}


###############################################################################################
                    # CREATE A BOOKINGS #
###############################################################################################

# Route creates a new booking
@booking_routes.route('/<int:resort_id>/new', methods=['POST'])
@login_required
def new_booking(resort_id):
    form = BookingForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_booking = Booking(
            user_id=current_user.to_dict()['id'],
            resort_id=resort_id,
            check_in=data['check_in'],
            check_out=data['check_out'],
        )

        db.session.add(new_booking)
        db.session.commit()
        return new_booking.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


###############################################################################################
                    # EDIT A BOOKING #
###############################################################################################

# Route updates a booking for user on a spot
@booking_routes.route('/<int:booking_id>', methods=['PUT'])
@login_required
def update_booking(booking_id):
    booking = Booking.query.get(booking_id)
    form = BookingForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        booking.check_in = data['check_in'],
        booking.check_out = data['check_out']

        db.session.commit()
        return booking.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


###############################################################################################
                    # DELETE A BOOKING #
###############################################################################################

# Route deletes a booking from a spot for a user
@booking_routes.route('/<int:booking_id>', methods=['DELETE'])
@login_required
def delete_booking(booking_id):
    booking = Booking.query.get(booking_id)
    db.session.delete(booking)
    db.session.commit()
    return booking.to_dict()