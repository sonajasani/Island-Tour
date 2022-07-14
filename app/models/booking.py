from .db import db


class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    resort_id = db.Column(db.Integer, db.ForeignKey('resorts.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)

    # Relationships
    users = db.relationship("User", back_populates="bookings")
    resorts = db.relationship("Resort", back_populates="bookings")

    def to_dict(self):
        return {
            "id": self.id,
            "resort_id": self.resort_id,
            "user_id":self.user_id,
            "user": self.users.to_dict(),
            "start_date": self.start_date,
            "end_date": self.end_date
        }
