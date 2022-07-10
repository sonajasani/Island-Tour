from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='bsmith1987', email='demo@aa.io', hashed_password='pbkdf2:sha256:260000$TRaqj8Ejhm6NYLgZ$11b29120a8a87b18217c245fd939eec41f3c94f6a0ca688a722edbebc3339f17',
        host=True, first_name="M. S.",  last_name="Mahi",  bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum \
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. ",
         photo="https://www.onmanorama.com/content/dam/mm/en/sports/cricket/images/2021/9/19/msd.jpg")
    marnie = User(
        username='rollerbladeluvr', email='marnie@aa.io', hashed_password='pbkdf2:sha256:260000$TRaqj8Ejhm6NYLgZ$11b29120a8a87b18217c245fd939eec41f3c94f6a0ca688a722edbebc3339f17',
        host=True,first_name="Marie", last_name="Qurie" , bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum \
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. ", photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKON61htR_KNYMONF1VVi8-Bl5HiXr5FFCBSdmqC52cnxWbrzAHKSl1GO-i2F9jJAM4M&usqp=CAU")
    bobbie = User(
        username='thatdudebobbie', email='bobbie@aa.io', hashed_password='pbkdf2:sha256:260000$TRaqj8Ejhm6NYLgZ$11b29120a8a87b18217c245fd939eec41f3c94f6a0ca688a722edbebc3339f17',
        host=True,first_name="Bobbie", last_name="Jackson" ,  bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum \
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. ",
         photo="https://d2studios.net/wp-content/uploads/blog/2015/04/6-Uses-for-a-Professional-Personal-Portrait-Photograph.jpg")

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
