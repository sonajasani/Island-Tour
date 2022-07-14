from .db import db

class Image(db.Model):
  __tablename__ = "images"

  id = db.Column(db.Integer, primary_key=True)
  resort_id = db.Column(db.Integer, db.ForeignKey('resorts.id'), nullable=False)
  url = db.Column(db.String(255), nullable=False)


  # Relationships
  resorts = db.relationship("Resort",back_populates="images")

  def to_dict(self):
    return {
       "id": self.id,
       "url": self.url,
       "resort_id": self.resort_id
    }
