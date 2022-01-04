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
        title: "Coors Light",
        style: "Light Lager",
        aroma: "light",
        description: "easy drinking",
        abv: "4.2%",
        taste: "bright",
        website: "www.coorslight.com",
        imgURL: "https://www.coorslight.com/sites/coorslight/files/inline-images/coorslight-can.png",
        type: "beer",
    },
    {
      title: "Barefoot Cabernet",
      style: "Cabernet",
      aroma: "dark",
      description: "full bodied",
      abv: "12%",
      taste: "bitter",
      website: "www.barefoot.com",
      imgURL: "https://images.vivino.com/thumbs/jvCoaZW7Sx6cgdHDD5Qb4w_pb_600x600.png",
      type: "wine",
    },
    {
      title: "Hendricks",
      style: "Gin",
      aroma: "easy",
      description: "bitter",
      abv: "40%",
      taste: "juicy goodness",
      website: "www.hendricks.com",
      imgURL: "https://cdn.shopify.com/s/files/1/1531/2799/products/Hendricks_1l_c953b6bc-6a1a-48b4-a6f4-3bece76a9a8a_large.png?v=1638215438",
      type: "liquor",
    },
    {
      title: "Guinness",
      style: "Stout",
      aroma: "coffee",
      description: "dark roast",
      abv: "4%",
      taste: "yum",
      website: "www.guinness.com",
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
    }
    
  ]

  //This inserts the bevs into database
  await Bev.insertMany(bevs)
  console.log('Created users & bevs!')

  db.close()
}
  
insertData()