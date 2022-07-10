from app.models import db, Booking
from datetime import date


# # Adds a demo user, you can add other users here if you want
def seed_bookings():
    booking1 = Booking(
        resort_id=1, user_id=1, start_date=date(2023, 1, 1), end_date=date(2023, 2, 2))
    booking2 = Booking(
        resort_id=2, user_id=2, start_date=date(2023, 3, 3), end_date=date(2023, 3, 5))
    booking3 = Booking(
        resort_id=3, user_id=3, start_date=date(2022, 11, 11), end_date=date(2022, 12, 11))
    booking4 = Booking(
        resort_id=2, user_id=1, start_date=date(2022, 12, 15), end_date=date(2022, 12, 30))

    db.session.add(booking1)
    db.session.add(booking2)
    db.session.add(booking3)
    db.session.add(booking4)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_bookings():
    db.session.execute('TRUNCATE resorts RESTART IDENTITY CASCADE;')
    db.session.commit()
