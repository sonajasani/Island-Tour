from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    resort_id = db.Column(db.Integer, db.ForeignKey("resorts.id"), nullable=False)
    rating = db.Column(db.Float, nullable=False)
    review = db.Column(db.String(1000), nullable=False)

    # Relationships
    users = db.relationship("User", back_populates="reviews")
    resorts = db.relationship("Resort", back_populates="reviews")

    # Grab all reviews
    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "resortId": self.resort_id,
            "rating": self.rating,
            "review": self.review,
            "username": self.users.username,
            "photo": self.users.photo
        }
