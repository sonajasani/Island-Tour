from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


db = SQLAlchemy()

####################################################################################################

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    bio = db.Column(db.String(180), nullable=True)
    profile_pic_url = db.Column(db.String, nullable=True)
    created_at = db.Column(db.TIMESTAMP(timezone=False))
    updated_at = db.Column(db.TIMESTAMP(timezone=False))


    # Relationships
    resorts = db.relationship("Resort", back_populates='users', cascade="all, delete")
    bookings = db.relationship("Booking", back_populates="users")
    reviews = db.relationship("Review", back_populates="users")


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
            'bio': self.bio,
            'profile_pic_url': self.profile_pic_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }


####################################################################################################

class Resort(db.Model):
    __tablename__ = 'resorts'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    island = db.Column(db.String(50), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    continent = db.Column(db.String(20), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    minibar = db.Column(db.Boolean, nullable=False)
    gym = db.Column(db.Boolean, nullable=False)
    spa = db.Column(db.Boolean, nullable=False)
    jacuzzi = db.Column(db.Boolean, nullable=False)
    pool = db.Column(db.Boolean, nullable=False)
    room_service = db.Column(db.Boolean, nullable=False)
    fire_place = db.Column(db.Boolean, nullable=False)
    wifi = db.Column(db.Boolean, nullable=False)
    workspace = db.Column(db.Boolean, nullable=False)
    water_sports = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.TIMESTAMP(timezone=False))
    updated_at = db.Column(db.TIMESTAMP(timezone=False))

    # Relationships
    users = db.relationship("User", back_populates='resorts')
    bookings = db.relationship("Booking", back_populates="resorts", cascade="all, delete")
    reviews = db.relationship("Review", back_populates="resorts", cascade="all, delete")
    resort_images = db.relationship("ResortImage", back_populates="resorts", cascade="all, delete")
    avg_review = db.relationship("AvgReview", back_populates="resorts", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'island': self.island,
            'country': self.country,
            'continent': self.continent,
            'description': self.description,
            'user_id': self.user_id,
            'price': self.price,
            'minibar': self.minibar,
            'gym': self.gym,
            'spa': self.spa,
            'jacuzzi': self.jacuzzi,
            'pool': self.pool,
            'room_service': self.room_service,
            'fire_place': self.fire_place,
            'wifi': self.wifi,
            'workspace': self.workspace,
            'water_sports': self.water_sports,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

####################################################################################################

class ResortImage(db.Model):
    __tablename__ = "resort_images"

    id = db.Column(db.Integer, primary_key=True)
    resort_id = db.Column(db.Integer, db.ForeignKey("resorts.id", ondelete="CASCADE"), nullable=False)
    url = db.Column(db.String, nullable=False)
    created_at = db.Column(db.TIMESTAMP(timezone=False))
    updated_at = db.Column(db.TIMESTAMP(timezone=False))

    # Relationship
    resorts = db.relationship("Resort", back_populates="resort_images")

    def to_dict(self):
        return {
            "id": self.id,
            "resort_id": self.resort_id,
            "url": self.url,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }


####################################################################################################

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    resort_id = db.Column(db.Integer, db.ForeignKey("resorts.id"), nullable=False)
    rating = db.Column(db.Float, nullable=False)
    comment = db.Column(db.String(1000), nullable=False)
    created_at = db.Column(db.TIMESTAMP(timezone=False))
    updated_at = db.Column(db.TIMESTAMP(timezone=False))

    # Relationship
    resorts = db.relationship("Resort", back_populates="reviews")
    users = db.relationship("User", back_populates="reviews")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "resort_id": self.resort_id,
            "comment": self.comment,
            "review": self.review,
            "username": self.users.username,
            "photo": self.users.profile_pic_url,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }


####################################################################################################

class AvgReview(db.Model):
    __tablename__ = 'avg_reviews'

    resort_id = db.Column(db.Integer, db.ForeignKey("resorts.id", ondelete="CASCADE"), primary_key=True)
    total = db.Column(db.Integer, nullable=False)
    avg_rating = db.Column(db.Integer, nullable=False)

    # Relationship
    resorts = db.relationship("Resort", back_populates="avg_review")


    def to_dict(self):
        return {
            "resort_id": self.resort_id,
            "total": self.total,
            "avg_rating": (self.avg_rating / self.total) if self.total > 0 else 0,
        }

####################################################################################################

class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    resort_id = db.Column(db.Integer, db.ForeignKey('resorts.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    check_in = db.Column(db.Date, nullable=False)
    check_out = db.Column(db.Date, nullable=False)
    created_at = db.Column(db.TIMESTAMP(timezone=False))
    updated_at = db.Column(db.TIMESTAMP(timezone=False))

    # Relationship
    resorts = db.relationship("Resort", back_populates="bookings")
    users = db.relationship("User", back_populates="bookings")


    def to_dict(self):
        return {
            "id": self.id,
            "resort_id": self.resort_id,
            "user": self.users.to_dict(),
            "check_in": self.check_in,
            "check_out": self.check_out,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }