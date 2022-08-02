from flask_wtf import FlaskForm
from wtforms import StringField, FileField
from wtforms.validators import DataRequired, ValidationError
from app.models import User
from flask_login import current_user
from flask_wtf.file import FileAllowed



def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if (user == current_user) or (not user):
        pass
    else:
        raise ValidationError('Email address is already in use.')
    # if (user):
    #     raise ValidationError('Email address is already in use.')



def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if (user == current_user) or (not user):
        pass
    else:
        raise ValidationError('Username is already in use.')
    # if (user):
    #     raise ValidationError('Username is already in use.')




class EditUserForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists])
    first_name = StringField('first_name')
    last_name = StringField('last_name')
    bio = StringField('bio')
    photo = FileField('photo', validators=[FileAllowed(['jpg', 'png', 'jpeg', 'gif', 'img', 'tiff'])])