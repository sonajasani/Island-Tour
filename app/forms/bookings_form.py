from tracemalloc import start
from flask_wtf import FlaskForm
from wtforms import DateField
from wtforms.validators import DataRequired, ValidationError
from app.models import Booking
from datetime import date


class BookingForm(FlaskForm):
  check_in = DateField("check_in", validators=[DataRequired()])
  check_out = DateField("check_out", validators=[DataRequired()])