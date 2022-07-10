from app.models import db, Image


# # Adds a demo user, you can add other users here if you want
def seed_images():
    images = [
        Image(resort_id=1, url="https://cdn.homecrux.com/wp-content/uploads/2017/02/Soneva-Jani-10.jpg"),
        Image(resort_id=1, url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kEqdPFKBBOCzYRsvoxfyBmUHqYhldqv6rQ&usqp=CAU"),
        Image(resort_id=1, url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1w6QE_eWFw35Fm10HJfeybnRmJreOT4ynEg&usqp=CAU"),
        Image(resort_id=1, url="https://images.squarespace-cdn.com/content/v1/576aa85dcd0f68dfc7e45e37/1635738516732-RYVO7PSFDDXHEIKMNF67/blog.1.jpg"),
        Image(resort_id=1, url="https://i0.wp.com/utravlr.com/wp-content/uploads/2021/03/14979_4-Bedroom-Water-Reserve-with-Slide-1-1.jpg?resize=660%2C440&ssl=1"),

        Image(resort_id=2, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/06/52/6e/20181009-112052-largejpg.jpg?w=1200&h=-1&s=1"),
        Image(resort_id=2, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/06/52/6c/img-20181012-wa0007-largejpg.jpg?w=1100&h=-1&s=1"),
        Image(resort_id=2, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ab/aa/52/photo0jpg.jpg?w=1200&h=-1&s=1"),
        Image(resort_id=2, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/ef/16/9a/20190609-100758-largejpg.jpg?w=1100&h=-1&s=1"),
        Image(resort_id=2, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/0f/b9/5d/silver-sand-beach-resort.jpg?w=1200&h=-1&s=1"),

        Image(resort_id=3, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/1c/58/33/from-2023-our-completely.jpg?w=800&h=-1&s=1"),
        Image(resort_id=3, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/1c/58/2a/let-us-advise-you-to.jpg?w=800&h=-1&s=1"),
        Image(resort_id=3, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/1c/58/0c/the-best-rooms-a-couple.jpg?w=800&h=-1&s=1"),
        Image(resort_id=3, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/1c/58/38/let-us-advise-you-to.jpg?w=800&h=-1&s=1"),
        Image(resort_id=3, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/1c/58/35/our-restaurant-la-terrazza.jpg?w=800&h=-1&s=1"),

        Image(resort_id=4, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/e0/23/f8/vista-aerea.jpg?w=1100&h=-1&s=1"),
        Image(resort_id=4, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/cd/c8/43/portblue-club-pollentia.jpg?w=1200&h=-1&s=1"),
        Image(resort_id=4, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d4/17/c4/portblue-club-pollentia.jpg?w=1200&h=-1&s=1"),
        Image(resort_id=4, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d4/13/59/portblue-club-pollentia.jpg?w=1200&h=-1&s=1"),
        Image(resort_id=4, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d4/18/47/portblue-club-pollentia.jpg?w=1200&h=-1&s=1"),

        Image(resort_id=5, url="https://lh3.googleusercontent.com/p/AF1QipOrVnfEpc7G_u8gXLCTyvoz1ZU3SwibJ9Cg9ava=w296-h202-n-k-rw-no-v1"),
        Image(resort_id=5, url="https://lh3.googleusercontent.com/proxy/cX0ihQQOc02JmiVFe_HfDmgTsyRJQuxjqrgGfk59gDukYg4j0sjbuHYBq2g5dMh_yPIZ1AgyHg4ovZ-4uyMx3ZRR8h0khGiOYaoGHnWhQHjfErXPFN-A69Hp0ORyCQ6wakHPAuYja5-n2cCSiEoAsXNGbRoXYg=w296-h202-n-k-rw-no-v1"),
        Image(resort_id=5, url="https://lh3.googleusercontent.com/p/AF1QipMOjru3bxbr6Vz-kTVrENbiRUeWXEiIQY57xKTR=w296-h202-n-k-rw-no-v1"),
        Image(resort_id=5, url="https://lh5.googleusercontent.com/p/AF1QipMTq01We8ocs5uHvtW0bMPu5HwiUs_gtp8sIurY=w253-h168-k-no"),
        Image(resort_id=5, url="https://lh5.googleusercontent.com/p/AF1QipMjKVYePJaZDzfo3Z2rKiJ6E0UmxsmTmIEvcIXT=w253-h168-k-no"),

        Image(resort_id=6, url="https://lh3.googleusercontent.com/p/AF1QipMRvt-fL3Ny_9neRb7urrpeojaci9ETDbYZf6Ga=w296-h202-n-k-rw-no-v1"),
        Image(resort_id=6, url="https://lh3.googleusercontent.com/p/AF1QipNBhTggzcata9Z8ASQ_HQ-i6-L12tRDjYFKn1hy=w296-h202-n-k-rw-no-v1"),
        Image(resort_id=6, url="https://lh3.googleusercontent.com/p/AF1QipNoNjckXOHVX4KHt534nA0ToYVudTUYz79A1LP_=w296-h202-n-k-rw-no-v1"),
        Image(resort_id=6, url="https://lh5.googleusercontent.com/p/AF1QipNqK5ue834dj_VdJ9mjNS6EPT8mGCCKdgMQZTOR=w253-h168-k-no"),
        Image(resort_id=6, url="https://lh5.googleusercontent.com/p/AF1QipO5uaR8UEM5mlHJFbk0O--Jz3jx5E8NYg60P4D0=w253-h168-k-no"),

        Image(resort_id=7, url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/228002724.jpg?k=b562cfeefb8d6101277b408cb52580fbcd022eb59f332e981cc05545a60ad1e6&o=&hp=1"),
        Image(resort_id=7, url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/228002462.jpg?k=a727d892dcf1e976873caf773304bb23373449652536a22d8713fc31b1560597&o=&hp=1"),
        Image(resort_id=7, url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/254582566.jpg?k=f7869f7fa13064d45a636b5af066fe2b001bbf4b149deae4c4c3db51bea93668&o=&hp=1"),
        Image(resort_id=7, url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/228002210.jpg?k=5f8d0bc825f95b76c3c294352d87c3009e3184f44e67707437a886489c22603d&o=&hp=1"),
        Image(resort_id=7, url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/228002681.jpg?k=f52d86c5764684c73c902d37cd39e96ec0a662e51004583b0750966ce1b31c66&o=&hp=1"),

        Image(resort_id=8, url="https://lirp.cdn-website.com/536ec85f/dms3rep/multi/opt/Audrey+014_2_cropped_2-1920w.jpg"),
        Image(resort_id=8, url="https://lirp.cdn-website.com/536ec85f/dms3rep/multi/opt/2015-10-02+04.28.49-1And8more-1920w.jpg"),
        Image(resort_id=8, url="https://lirp.cdn-website.com/536ec85f/dms3rep/multi/opt/1-95278201-1920w.jpg"),
        Image(resort_id=8, url="https://lirp.cdn-website.com/536ec85f/dms3rep/multi/opt/4-5a738797-1920w.jpg"),
        Image(resort_id=8, url="https://lirp.cdn-website.com/536ec85f/dms3rep/multi/opt/baot-1920w.jpg"),

        Image(resort_id=9, url="https://www.angsana.com/_next/image?url=https%3A%2F%2Fwww.angsana.com%2Fassets%2F2021-12%2FSanctuaries_Destination-dining.JPG&w=640&q=75"),
        Image(resort_id=9, url="https://www.angsana.com/_next/image?url=https%3A%2F%2Fwww.angsana.com%2Fassets%2F2021-12%2FSanctuaries_Garden-lagoona-suite_interior.jpg&w=640&q=75"),
        Image(resort_id=9, url="https://www.angsana.com/_next/image?url=https%3A%2F%2Fwww.angsana.com%2Fassets%2F2021-12%2FSanctuaries_Lagoona-pool.jpg&w=640&q=75"),
        Image(resort_id=9, url="https://www.angsana.com/_next/image?url=https%3A%2F%2Fwww.angsana.com%2Fassets%2F2021-12%2FSanctuaries_Beachfront-pool-suite_bathroom.jpg&w=640&q=75"),
        Image(resort_id=9, url="https://www.angsana.com/_next/image?url=https%3A%2F%2Fwww.angsana.com%2Fassets%2F2021-12%2FSanctuaries_beachfront-pool-suite_day-shot.jpg&w=640&q=75"),

        Image(resort_id=10, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/9b/c4/a9/isalo-rock-lodge.jpg?w=1200&h=-1&s=1"),
        Image(resort_id=10, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/23/9d/35/isalo-rock-lodge-madagascar.jpg?w=1200&h=-1&s=1"),
        Image(resort_id=10, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/71/db/f4/isalo-rock-lodge-madagascar.jpg?w=1200&h=-1&s=1"),
        Image(resort_id=10, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/23/9f/06/isalo-rock-lodge-madagascar.jpg?w=1200&h=-1&s=1"),
        Image(resort_id=10, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/9b/c4/9f/isalo-rock-lodge.jpg?w=1200&h=-1&s=1"),

        Image(resort_id=11, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/5b/ae/f4/bedroom.jpg?w=800&h=-1&s=1"),
        Image(resort_id=11, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/45/6c/ae/beach-club.jpg?w=1200&h=-1&s=1"),
        Image(resort_id=11, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/45/6c/66/beach-club.jpg?w=1200&h=-1&s=1"),
        Image(resort_id=11, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4e/9d/51/beach.jpg?w=1200&h=-1&s=1"),
        Image(resort_id=11, url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/d5/aa/23/pool--v8418042.jpg?w=1200&h=-1&s=1"),

        Image(resort_id=12, url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/52718705.jpg?k=effa45487e70ab3f5de6516d16dd887134852e8a5f9e6034cf6e04f8d33bf5e7&o=&hp=1"),
        Image(resort_id=12, url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/147408638.jpg?k=a726fb0afe22059cf8ba2c298befda42b2159ca411c86db442a28e94024a21b2&o=&hp=1"),
        Image(resort_id=12, url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/52718763.jpg?k=8e1a581864f4f164b03f4215ec79bbb383bb026a23ec74ec105187833a28574e&o=&hp=1"),
        Image(resort_id=12, url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/147409129.jpg?k=622d882c008469ad71bd26282dd3df5bba48dcd26a7e3854e754d672dd47a5dd&o=&hp=1"),
        Image(resort_id=12, url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/52719181.jpg?k=7233e1c7d1abb6523c90878ffc76d072ea7825834805a163f58b4af34e256a5e&o=&hp=1"),

        Image(resort_id=13, url="https://image.cnbcfm.com/api/v1/image/104778038-Sleeping_pods_in_front_of_the_ice_fall.JPG?v=1529476522&w=740&h=416"),
        Image(resort_id=13, url="https://image.cnbcfm.com/api/v1/image/104776145-dining-room-WD3.jpg?v=1529476515&w=740&h=416"),
        Image(resort_id=13, url="https://image.cnbcfm.com/api/v1/image/104776185-sleeping-pod-2WD.jpg?v=1529476515&w=740&h=416"),
        Image(resort_id=13, url="https://image.cnbcfm.com/api/v1/image/104776156-icecavesWD.jpg?v=1529476515&w=740&h=416"),
        Image(resort_id=13, url="https://image.cnbcfm.com/api/v1/image/104776189-WD-Private-Jet-1.jpg?v=1529476515&w=740&h=416"),

    ]

    for image in images:
        db.session.add(image)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_images():
    db.session.execute('TRUNCATE resorts RESTART IDENTITY CASCADE;')
    db.session.commit()
