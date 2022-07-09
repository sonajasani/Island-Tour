from email.policy import default
from random import choices
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, DecimalField, DateField, BooleanField
from wtforms.validators import DataRequired, ValidationError
from app.models import db, Resort

###########################################################################################

continent = [("Asia","Asia"), ("Europe","Europe"), ("North America","North America"), ("South America","South America"), ("Oceania","Oceania"), ("Antartica","Antartica"), ("Africa","Africa")] 

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
def test(form,field):
    print(field.data, "...........field data..........")


class ResortForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), test ] )
    island = StringField('island', validators=[DataRequired(), test])
    country = StringField('country', validators=[DataRequired(), test])
    continent = SelectField('continent', validators=[test], choices=continent)
    description = StringField('description', validators=[DataRequired(), test])
    user_id = IntegerField('user_id', validators=[DataRequired(), test])
    price = IntegerField('price', validators=[DataRequired(), validate_price, test])
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


