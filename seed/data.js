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
        title: "Beverage 1",
        style: "Test style",
        aroma: "good",
        description: "testing description blah",
        abv: "6%",
        taste: "yum",
        website: "www.testing.com",
        imgURL: "img.test/bev.com",
        type: "Beer",
    },
    {
      title: "Beverage 2",
      style: "Test style",
      aroma: "good",
      description: "testing description blah",
      abv: "4%",
      taste: "yum",
      website: "www.testing.com",
      imgURL: "img.test/bev.com",
      type: "Wine",
    },
    {
      title: "Beverage 3",
      style: "Test style",
      aroma: "good",
      description: "testing description blah",
      abv: "7%",
      taste: "yum",
      website: "www.testing.com",
      imgURL: "img.test/bev.com",
      type: "Liquor",
    },
    {
      title: "Beverage 4",
      style: "Test style",
      aroma: "good",
      description: "testing description blah",
      abv: "6%",
      taste: "yum",
      website: "www.testing.com",
      imgURL: "img.test/bev.com",
      type: "Beer",
    },
    {
      title: "Beverage 5",
      style: "Test style",
      aroma: "good",
      description: "testing description blah",
      abv: "6%",
      taste: "yum",
      website: "www.testing.com",
      imgURL: "img.test/bev.com",
      type: "Wine",
    },
    
  ]

  //This inserts the bevs into database
  await Bev.insertMany(bevs)
  console.log('Created users & bevs!')

  db.close()
}
  
insertData()