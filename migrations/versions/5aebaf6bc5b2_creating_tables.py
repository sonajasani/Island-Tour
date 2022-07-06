"""creating tables

Revision ID: 5aebaf6bc5b2
Revises: 
Create Date: 2022-07-06 16:44:55.270070

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5aebaf6bc5b2'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('bio', sa.String(length=180), nullable=True),
    sa.Column('profile_pic_url', sa.String(), nullable=True),
    sa.Column('created_at', sa.TIMESTAMP(), nullable=True),
    sa.Column('updated_at', sa.TIMESTAMP(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('resorts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('island', sa.String(length=50), nullable=False),
    sa.Column('country', sa.String(length=50), nullable=False),
    sa.Column('continent', sa.String(length=20), nullable=False),
    sa.Column('description', sa.String(length=500), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('minibar', sa.Boolean(), nullable=False),
    sa.Column('gym', sa.Boolean(), nullable=False),
    sa.Column('spa', sa.Boolean(), nullable=False),
    sa.Column('jacuzzi', sa.Boolean(), nullable=False),
    sa.Column('pool', sa.Boolean(), nullable=False),
    sa.Column('room_service', sa.Boolean(), nullable=False),
    sa.Column('fire_place', sa.Boolean(), nullable=False),
    sa.Column('wifi', sa.Boolean(), nullable=False),
    sa.Column('workspace', sa.Boolean(), nullable=False),
    sa.Column('water_sports', sa.Boolean(), nullable=False),
    sa.Column('created_at', sa.TIMESTAMP(), nullable=True),
    sa.Column('updated_at', sa.TIMESTAMP(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('avg_reviews',
    sa.Column('resort_id', sa.Integer(), nullable=False),
    sa.Column('total', sa.Integer(), nullable=False),
    sa.Column('avg_rating', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['resort_id'], ['resorts.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('resort_id')
    )
    op.create_table('bookings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('resort_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('check_in', sa.Date(), nullable=False),
    sa.Column('check_out', sa.Date(), nullable=False),
    sa.Column('created_at', sa.TIMESTAMP(), nullable=True),
    sa.Column('updated_at', sa.TIMESTAMP(), nullable=True),
    sa.ForeignKeyConstraint(['resort_id'], ['resorts.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('resort_images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('resort_id', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(), nullable=False),
    sa.Column('created_at', sa.TIMESTAMP(), nullable=True),
    sa.Column('updated_at', sa.TIMESTAMP(), nullable=True),
    sa.ForeignKeyConstraint(['resort_id'], ['resorts.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('resort_id', sa.Integer(), nullable=False),
    sa.Column('rating', sa.Float(), nullable=False),
    sa.Column('comment', sa.String(length=1000), nullable=False),
    sa.Column('created_at', sa.TIMESTAMP(), nullable=True),
    sa.Column('updated_at', sa.TIMESTAMP(), nullable=True),
    sa.ForeignKeyConstraint(['resort_id'], ['resorts.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('resort_images')
    op.drop_table('bookings')
    op.drop_table('avg_reviews')
    op.drop_table('resorts')
    op.drop_table('users')
    # ### end Alembic commands ###
