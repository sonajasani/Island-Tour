from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='FierceFirefly', email='demo@aa.io', hashed_password='pbkdf2:sha256:260000$TRaqj8Ejhm6NYLgZ$11b29120a8a87b18217c245fd939eec41f3c94f6a0ca688a722edbebc3339f17',
        host=True, first_name="M. S.",  last_name="Mahi",  bio="Mahendra Singh Dhoni; born 7 July 1981) is an Indian professional cricketer who was captain of the Indian national cricket team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. \
            He led the team to three ICC trophies including the 2007 ICC World Twenty20, 2011 ICC Cricket World Cup and 2013 ICC Champions Trophy.",
         photo="https://www.onmanorama.com/content/dam/mm/en/sports/cricket/images/2021/9/19/msd.jpg")
    marnie = User(
        username='BrownSugar', email='marnie@aa.io', hashed_password='pbkdf2:sha256:260000$TRaqj8Ejhm6NYLgZ$11b29120a8a87b18217c245fd939eec41f3c94f6a0ca688a722edbebc3339f17',
        host=True,first_name="Marie", last_name="Qurie" , bio="Ea quod everti oblique per. Utamur imperdiet eum ne, appareat concludaturque eos te. Nam ex admodum recusabo, ut vel percipitur assueverit. Eirmod apeirian ad pri, facilis singulis ad qui, wisi eleifend sed no. \
            Sit vitae scaevola at. Eu usu magna aperiri lobortis", photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKON61htR_KNYMONF1VVi8-Bl5HiXr5FFCBSdmqC52cnxWbrzAHKSl1GO-i2F9jJAM4M&usqp=CAU")
    bobbie = User(
        username='TheCoolDude', email='bobbie@aa.io', hashed_password='pbkdf2:sha256:260000$TRaqj8Ejhm6NYLgZ$11b29120a8a87b18217c245fd939eec41f3c94f6a0ca688a722edbebc3339f17',
        host=True,first_name="Bobbie", last_name="Jackson" ,  bio="Lorem ipsum dolor sit amet, nec ut mundi recteque. Eum ut odio quaestio. \
            Te legimus dolores cum. Alia perfecto nam ad, persius torquatos assentior mei an. Ex intellegat contentiones eum.",
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
