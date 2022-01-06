import db from '../db/connection.js'
import User from '../models/user.js'
import Bev from "../models/bev.js"
import bcrypt from 'bcrypt'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const user1 = new User({
    username: 'bruno',
    email: 'root@super.gmail.com',
    // this is what 
    password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
  })
  await user1.save()

  const user2 = new User({
    username: 'bianca',
    email: 'b.anca@super.gmail.com',
    password_digest: await bcrypt.hash('!$h0pp3R1', 11)
  })
  await user2.save()

  const user3 = new User({
    username: 'enzo',
    email: 'n.zo@super.gmail.com',
    password_digest: await bcrypt.hash('!$eller4Lif3', 11)
  })
  await user3.save()

  const user4 = new User({
    username: 'kumi',
    email: 'kumi@super.gmail.com',
    password_digest: await bcrypt.hash('L0v32!p4int', 11)
  })
  await user4.save()

  // Bev data that we are going to insert into database 

  const bevs = [
    
      {
        title: "Upland Wheat Ale",
        style: "Belgian Witbier",
        aroma: "Pilsner, Wheat",
        description: "Upland Wheat Ale is a classic rendition of the Belgian Witbier (white beer) style. We brew it with organic coriander and orange zest to be light on the tongue and refreshingly tart. In the tradition of the Belgian Wit style, Upland Wheat Ale is unfiltered, allowing suspended starches to create a cloudy, golden appearance. This is an everyday, every meal type of beer. It’s comforting on a cold winter day and refreshing on a hot summer evening. That’s why it’s one of our most popular brews and a flagship beer of our brewery.",
        abv: "4.7%",
        taste: "Orange Zest & Coriandier",
        website: "https://uplandbeer.com/beers/wheat-ale/",
        imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641497365/Project%203%20/Wheat-1_sj6oj0.png",
        type: "beer",
    },
    {
      title: "Bourbon Barrel Cabernet Sauvignon",
      style: "Cabernet Sauvignon",
      aroma: "Oak",
      description: "Aged in oak this wine is very fruit forward. Hints of black cherry and blackberry. Light on tannins and easy to drink.",
      abv: "14%",
      taste: "Black Cherry and Blackbery",
      website: "https://www.urban-vines.com/store/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641497417/Project%203%20/be_Different_5_zu11uw.png",
      type: "wine",
    },
    {
      title: "Sun King Agave",
      style: "Agave",
      aroma: "Easy",
      description: "Spirit Distilled from 100% Agave",
      abv: "45%",
      taste: "Agave",
      website: "https://www.sunkingbrewing.com/agave/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641491863/Project%203%20/be_Different_4_odlgke.png",
      type: "liquor",
    },
    {
      title: "Dragonfly IPA",
      style: "IPA",
      aroma: "Carmel",
      description: "India Pale Ale originated when the British added excessive amounts of hops to help preserve their ales for long journeys to their citizens overseas, including to India. Our Dragonfly India Pale Ale is true to this tradition, featuring seven hop additions to create a powerful hop profile. A solid malt base, however, tempers the bitter American hops, giving Dragonfly a balance not often found in this style. The end product is a well-balanced, malty beer with the crisp taste of hops and an exceptionally floral nose. Dragonfly is our most popular beer, serving as an introduction to craft beer for many and a longstanding favorite for many more.",
      abv: "6.7%",
      taste: "Pale Ale, White Wheat, Carapils, Special Roast, Caramel 60L",
      website: "https://uplandbeer.com/beers/dragonfly/",
      imgURL: "https://products2.imgix.drizly.com/ci-guinness-draught-420c95ffc7f4bdc0.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
      type: "beer",
    },
    {
    title: "American Straight Rye Whiskey",
    style: "Deceptively smooth",
    aroma: "Spicy finish",
    description: "Sazerac-ready.",
    abv: "50%",
    taste: "Subtle sweetness",
    website: "https://hoteltangodistillery.com/",
    imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641309310/Project%203%20/Rye_Bottle_gwqvzq.png",
    type: "liquor",
    },
    {
      title: "Sangria",
      style: "Yum",
      aroma: "Citrus",
      description: " Grapes from Michigan.",
      abv: "7%",
      taste: "A sweet red wine blend with lime, lemon, and orange juices added for a fruity summer treat.",
      website: "https://www.urban-vines.com/store/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641309311/Project%203%20/6_ppzdlk.png",
      type: "wine",
    },
    {
      title: "Bad Elmer's Porter",
      style: "Porter",
      aroma: "Chocolate Malt",
      description: "Even if you aren’t as tough as Bad Elmer, you can still drink with him. This porter is a medium-bodied beer, brewed with lots of roasted malt, giving it flavors of coffee, liquorice, and chocolate. It’s rich, creamy, and characteristically dark yet extremely smooth. The initial light sweetness is followed by a clean, dry, roasty finish.",
      abv: "6%",
      taste: "Crisp",
      website: "https://uplandbeer.com/beers/bad-elmers/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641498133/Project%203%20/BadElmers_1_hhjsir.png",
      type: "beer",
    },
    {
      title: "House Spirits Coffee Liqueur",
      style: "Cordials, & Schnapps",
      aroma: "Orange Peel",
      description: "Take the rough edges of the morning with flavor and style.",
      abv: "20%",
      taste: "Coffee, Orange Peel",
      website: "https://drizly.com/liquor/liqueur/house-spirits-coffee-liqueur/p9806",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641498638/Project%203%20/be_Different_6_m0yath.png",
      type: "liquor",
    }
    
  ]

  //This inserts the bevs into database
  await Bev.insertMany(bevs)
  console.log('Created users & bevs!')

  db.close()
}
  
insertData()