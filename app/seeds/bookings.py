from app.models import db, Booking
from datetime import date


# # Adds a demo user, you can add other users here if you want
def seed_bookings():
    booking1 = Booking(
        resort_id=1, user_id=1, check_in=date(2022, 9, 15), check_out=date(2023, 5, 20))
    booking2 = Booking(
        resort_id=2, user_id=2, check_in=date(2022, 10, 15), check_out=date(2023, 2, 6))
    booking3 = Booking(
        resort_id=3, user_id=3, check_in=date(2022, 11, 15), check_out=date(2023, 1, 2))
    booking4 = Booking(
        resort_id=4, user_id=1, check_in=date(2022, 12, 15), check_out=date(2022, 11, 9))

    db.session.add(booking1)
    db.session.add(booking2)
    db.session.add(booking3)
    db.session.add(booking4)

    db.session.commit()


def undo_bookings():
    db.session.execute('TRUNCATE resorts RESTART IDENTITY CASCADE;')
    db.session.commit()
