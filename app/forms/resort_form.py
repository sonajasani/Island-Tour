from random import choices
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, DecimalField, BooleanField
from wtforms.validators import DataRequired, ValidationError
from app.models import Resort

###########################################################################################

continent = ["Asia", "Europe", "North America", "South America", "Oceania", "Antartica", "Africa"] 

def name_length(form, field):
    name = field.data
    if len(name) > 50:
        raise ValidationError(
            'Name is too long! Please make it 50 characters or less.')

def validate_price(form, field):
    # Checking if password matches
    if field.data <= 0:
        raise ValidationError('The number provided must be more than 0 in order to be listed.')

def resort_check(form, field):
  name = field.data
  resort = Resort.query.filter(Resort.name == name).first()
  if resort:
    raise ValidationError('This listing already exsits.')


def check_lat_lng(form, field):
    coordinate = field.data
    if coordinate == 0:
        raise ValidationError('Address not found.')

###########################################################################################


class ResortForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), name_length] )
    island = StringField('island', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    continent = SelectField('continent', validators=[DataRequired()], choices=continent)
    lat = DecimalField('lat', validators=[check_lat_lng])
    lng = DecimalField('lng', validators=[check_lat_lng])
    description = StringField('description', validators=[DataRequired()])
    # user_id = IntegerField('user_id', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired(), validate_price])
    minibar = BooleanField('minibar', default=False)
    gym = BooleanField('gym', default=False)
    spa = BooleanField('spa', default=False)
    jacuzzi = BooleanField('jacuzzi', default=False)
    pool = BooleanField('pool', default=False)
    room_service = BooleanField('room_service', default=False)
    fire_place = BooleanField('fire_place', default=False)
    wifi = BooleanField('wifi', default=False)
    workspace = BooleanField('workspace', default=False)
    water_sports = BooleanField('water_sports', default=False)