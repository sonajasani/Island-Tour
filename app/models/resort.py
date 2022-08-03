from .db import db



class Resort(db.Model):
  __tablename__ = 'resorts'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  island = db.Column(db.String(50), nullable=False)
  country = db.Column(db.String(50), nullable=False)
  continent = db.Column(db.String(20), nullable=False)
  lat = db.Column(db.Float, nullable=False)
  lng = db.Column(db.Float, nullable=False)
  description = db.Column(db.String(500), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  price = db.Column(db.Integer, nullable=False)
  minibar = db.Column(db.Boolean, default=False, server_default="false")
  gym = db.Column(db.Boolean, default=False, server_default="false")
  spa = db.Column(db.Boolean, default=False, server_default="false")
  jacuzzi = db.Column(db.Boolean, default=False, server_default="false")
  pool = db.Column(db.Boolean, default=False, server_default="false")
  room_service = db.Column(db.Boolean, default=False, server_default="false")
  fire_place = db.Column(db.Boolean, default=False, server_default="false")
  wifi = db.Column(db.Boolean, default=False, server_default="false")
  workspace = db.Column(db.Boolean, default=False, server_default="false")
  water_sports = db.Column(db.Boolean, default=False, server_default="false")


    # Relationships
  users = db.relationship("User", back_populates="resorts")
  bookings = db.relationship("Booking", back_populates="resorts", cascade="all, delete")
  reviews = db.relationship("Review", back_populates="resorts", cascade="all, delete")
  images = db.relationship("Image", back_populates="resorts", cascade="all, delete")




  # Grab general information of the resort
  def to_dict(self):
    return {
      "id": self.id,
      "host": self.users.to_dict(),
      'name': self.name,
      'island': self.island,
      'country': self.country,
      'continent': self.continent,
      'lat': self.lat,
      'lng': self.lng,
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
      "bookings": [ booking.id for booking in self.bookings],
      "reviews": [ {"id": review.id, "user_id":review.user_id} for review in self.reviews],
      "images": [ image.to_dict() for image in self.images],
  }
