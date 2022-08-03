from app.models import db, Resort


# # Adds a demo user, you can add other users here if you want
def seed_resorts():
    property1 = Resort(
        user_id=1,
        name="Soneva Jani Resort",
        island="Medhufaru Island",
        country="Maldieves",
        continent="Asia",
        lat = 5.112055,
        lng = 73.078026,
        description="The Indulgent escapism of a sparkling Turquoise lagoon makes Soneva Jani irresistable to experience seekers.",
        price=700,
        minibar=True,
        gym=True,
        spa=True,
        jacuzzi=True,
        pool=True,
        room_service=True,
        fire_place=True,
        wifi=True,
        workspace=True,
        water_sports=True
    )

    property2 = Resort(
        user_id=2,
        name="Silver Sand Resort",
        island="Havelock Island",
        country="India",
        continent="Asia",
        lat = 12.010291,
        lng = 93.007400,
        description="Hear the whisper of the winds playfully brushing past you, immerse yourself in the bosom of nature here.",
        price=250,
        minibar=True,
        gym=True,
        spa=True,
        jacuzzi=True,
        pool=True,
        room_service=True,
        fire_place=True,
        wifi=True,
        workspace=True,
        water_sports=True
    )

    property3 = Resort(
        user_id=3,
        name="Hotel Regina Cristina",
        island="Capri",
        country="Italy",
        continent="Europe",
        lat = 40.5491882,
        lng = 14.2442767,
        description="Whit our swimming pool, comfortable rooms, Italian Restaurant and delicious wood fire pizza, we host guest from all over the world",
        price=200,
        minibar=True,
        gym=True,
        spa=False,
        jacuzzi=True,
        pool=True,
        room_service=True,
        fire_place=True,
        wifi=True,
        workspace=True,
        water_sports=True
    )

    property4 = Resort(
        user_id=1,
        name="Portblue Club Pollentia Resort and Spa",
        island="Majorca",
        country="Spain",
        continent="Europe",
        lat = 39.86362,
        lng = 3.0934,
        description="A hotel in the heart of nature with awesome facilities for outdoor sports",
        price=300,
        minibar=True,
        gym=True,
        spa=True,
        jacuzzi=True,
        pool=True,
        room_service=True,
        fire_place=False,
        wifi=True,
        workspace=True,
        water_sports=True
    )

    property5 = Resort(
        user_id=2,
        name="Nannai Resort and Spa",
        island="Ipojuca",
        country="Brazil",
        continent="South America",
        lat = -8.4265267850659,
        lng = -34.977893829346,
        description="We are in an Atlantic Forest reserve, between coconut trees and mangroves, with all the richness of this ecosystem",
        price=400,
        minibar=True,
        gym=False,
        spa=True,
        jacuzzi=True,
        pool=True,
        room_service=True,
        fire_place=True,
        wifi=True,
        workspace=True,
        water_sports=True
    )

    property6 = Resort(
        user_id=3,
        name="Renaissance Wind Creek Aruba Resort",
        island="oranjestead",
        country="Aruba",
        continent="South America",
        lat = 12.500878,
        lng = -70.029305,
        description="Renaissance Island exists as a true tropical oasis. Renaissance Island is sure to inspire a story worth sharing.",
        price=600,
        minibar=True,
        gym=True,
        spa=True,
        jacuzzi=False,
        pool=True,
        room_service=True,
        fire_place=True,
        wifi=True,
        workspace=True,
        water_sports=True
    )

    property7 = Resort(
        user_id=1,
        name="The Lodge at Kukui'ula",
        island="Kaua'i's",
        country="United States of America",
        continent="North America",
        lat = 21.88583,
        lng = -159.48326,
        description="You'll learn that food tastes better, comminity feels stronger, family feels closer and time moves slower.",
        price=500,
        minibar=True,
        gym=True,
        spa=True,
        jacuzzi=True,
        pool=True,
        room_service=True,
        fire_place=True,
        wifi=True,
        workspace=True,
        water_sports=True
    )

    property8 = Resort(
        user_id=2,
        name="West Beach Resort",
        island="Orcas Island",
        country="United States of America",
        continent="North America",
        lat = 48.6882164,
        lng = -122.9576782,
        description="Treat yourself to a one-of-a-kind Pacific Northwest experience you won't soon forget.",
        price=400,
        minibar=True,
        gym=True,
        spa=False,
        jacuzzi=True,
        pool=True,
        room_service=True,
        fire_place=True,
        wifi=True,
        workspace=True,
        water_sports=True
    )

    property9 = Resort(
        user_id=3,
        name="Angsana Balaclava Resort",
        island="Balaclava",
        country="Mauritius",
        continent="Africa",
        lat = -20.100292,
        lng = 57.51355,
        description="Angsana Balaclava is a tropical oasis where luxury blends with genuine elegance and wellbeing.",
        price=600,
        minibar=True,
        gym=True,
        spa=True,
        jacuzzi=False,
        pool=True,
        room_service=True,
        fire_place=True,
        wifi=True,
        workspace=True,
        water_sports=True
    )

    property10 = Resort(
        user_id=1,
        name="Isalo Rock Lodge",
        island="Isalo",
        country="Madagascar",
        continent="Africa",
        lat = -22.538386,
        lng = 45.389359,
        description="Isalo Rock Lodge is a destination rather than just a hotel and guests will leave having experienced one of the most memoriable adventures one can imagine.",
        price=450,
        minibar=True,
        gym=False,
        spa=True,
        jacuzzi=True,
        pool=True,
        room_service=True,
        fire_place=True,
        wifi=True,
        workspace=True,
        water_sports=False
    )

    property11 = Resort(
        user_id=2,
        name="Beach Club Resort",
        island="Hamilton Island",
        country="Australia",
        continent="Oceania",
        lat = -20.346324484307,
        lng = 148.95659834146,
        description="An adults only oasis, this tanquil, boutique resort sits right on Catseye beach, overlooking the coral seas.",
        price=700,
        minibar=True,
        gym=True,
        spa=True,
        jacuzzi=True,
        pool=True,
        room_service=True,
        fire_place=True,
        wifi=True,
        workspace=True,
        water_sports=True
    )

    property12 = Resort(
        user_id=3,
        name="Romantic Piha Resort",
        island="Piha",
        country="New Zealand",
        continent="Oceania",
        lat = -36.956537,
        lng = 174.467634,
        description="It is the most impressive experience. Once you drive inside, you will feel you are totally in another world",
        price=650,
        minibar=True,
        gym=True,
        spa=True,
        jacuzzi=True,
        pool=True,
        room_service=True,
        fire_place=True,
        wifi=True,
        workspace=True,
        water_sports=True
    )

    property13 = Resort(
        user_id=1,
        name="White Desert Hotel",
        island="Antartica",
        country="Antartica",
        continent="Antartica",
        lat = -71.516667,
        lng = 8.800000,
        description="Arrive by Gulfstream jet and stay at our unique camps, for a carbon neutral experience that is as luxurious as it is adventurous.",
        price=800,
        minibar=True,
        gym=False,
        spa=False,
        jacuzzi=False,
        pool=False,
        room_service=True,
        fire_place=True,
        wifi=True,
        workspace=True,
        water_sports=False
    )

    db.session.add(property1)
    db.session.add(property2)
    db.session.add(property3)
    db.session.add(property4)
    db.session.add(property5)
    db.session.add(property6)
    db.session.add(property7)
    db.session.add(property8)
    db.session.add(property9)
    db.session.add(property10)
    db.session.add(property11)
    db.session.add(property12)
    db.session.add(property13)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_resorts():
    db.session.execute('TRUNCATE resorts RESTART IDENTITY CASCADE;')
    db.session.commit()
