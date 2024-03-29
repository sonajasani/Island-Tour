from email.policy import default
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(20), nullable=True)
    last_name = db.Column(db.String(20), nullable=True)
    host = db.Column(db.Boolean, nullable=False, default=False)
    bio = db.Column(db.String(1000), nullable=True)
    photo = db.Column(db.String(255), nullable=True)

    # Relationships
    resorts = db.relationship("Resort", back_populates="users", cascade="all, delete" )
    bookings = db.relationship("Booking", back_populates="users", cascade="all, delete")
    reviews = db.relationship("Review", back_populates="users", cascade="all, delete")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'bio': self.bio,
            'host': self.host,
            'photo': self.photo,
            "bookings": [ booking.id for booking in self.bookings],
            "resorts": [ resort.id for resort in self.resorts ]
        }
