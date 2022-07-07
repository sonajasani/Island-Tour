from random import choices
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, DecimalField, DateField, BooleanField
from wtforms.validators import DataRequired, ValidationError
from app.models import Resort

###########################################################################################


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
  island = field.data
  country = field.data
  resort = Resort.query.filter(Resort.name == name, Resort.island == island, Resort.country == country).first()
  if resort:
    raise ValidationError('This listing already exsits.')

###########################################################################################

class ResortForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    island = StringField('island', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    continent = StringField('continent', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired(), validate_price])
    minibar = BooleanField('minibar')
    gym = BooleanField('gym')
    spa = BooleanField('spa')
    jacuzzi = BooleanField('jacuzzi')
    pool = BooleanField('pool')
    room_service = BooleanField('room_service')
    fire_place = BooleanField('fire_place')
    wifi = BooleanField('wifi')
    workspace = BooleanField('workspace')
    water_sports = BooleanField('water_sports')


