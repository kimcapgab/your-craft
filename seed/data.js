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
      title: "Dragonfly IPA",
      style: "IPA",
      aroma: "Carmel",
      description: "India Pale Ale originated when the British added excessive amounts of hops to help preserve their ales for long journeys to their citizens overseas, including to India. Our Dragonfly India Pale Ale is true to this tradition, featuring seven hop additions to create a powerful hop profile. A solid malt base, however, tempers the bitter American hops, giving Dragonfly a balance not often found in this style. The end product is a well-balanced, malty beer with the crisp taste of hops and an exceptionally floral nose. Dragonfly is our most popular beer, serving as an introduction to craft beer for many and a longstanding favorite for many more.",
      abv: "6.7%",
      taste: "Pale Ale, White Wheat, Carapils, Special Roast, Caramel 60L",
      website: "https://uplandbeer.com/beers/dragonfly/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641507461/Project%203%20/Dragonfly-1_1_qzenfu.png",
      type: "beer",
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
      title: "Champagne Velvet",
      style: "Pilsener",
      aroma: "Sweet",
      description: "In 1902, Walter Bruhn, the son of German immigrants, created a recipe for a new pilsener beer named Champagne Velvet. Over the next 50 years it grew to become one of Indiana’s most popular beers, a go-to for many of our grandparents and great-grandparents. It was “The Beer with the Million Dollar Flavor,” which wasn’t just marketing fluff; it was actually insured with a $1 million policy. Industrial consolidation took down this regional favorite and the recipe went missing for many years until a fan rescued the hand-written recipe from deep in a trademark portfolio. Upland reformulated the recipe using that scrap of paper and proudly brings this Midwestern legend back to life. Champagne Velvet has a refreshingly light pilsener body with some sweet complexities given off by the corn malt used in this recipe, making this the perfect lager. It’s smooth and light, but still full of flavor, the perfect everyday beer for craft beer drinkers and a step up for domestic drinkers.",
      abv: "5.5%",
      taste: "Refreshingly Light",
      website: "https://uplandbeer.com/beers/champagne-velvet/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641573620/Project%203%20/ChampagneVelvet-1_gnyvo7.png",
      type: "beer",
    },
    {
      title: "Campside",
      style: "Pale Ale",
      aroma: "Fragrant citrus and tropical",
      description: "Campside has developed a loyal following with its showcase of the most interesting and effervescent American hops. Beginning in 2018, Campside will transition from a Session IPA to an American Pale Ale and will be available year round. All of the fragrant citrus and tropical character of late additions of Cascade, Simcoe, and Mosaic hops will remain, supported by a moderate malt backbone and defined by balanced drinkability. Late additions of hops allow the distinct fragrance of grapefruit, apricot and pine to be preserved as much as possible in the finished beer. With a crisp, but subtle bitterness, a balanced malt character, and a 5.4% ABV, this is the perfect year round beverage for those who think flavor is just as important as refreshment.",
      abv: "5.4",
      taste: "Grapefruit, apricot and pine",
      website: "https://uplandbeer.com/beers/campside/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641575533/Project%203%20/Camside_1_n57jaq.png",
      type: "beer",
    },
    {
      title: "Pachanga",
      style: "Mexican-style Lager",
      aroma: "Malt, grain, cereals, and lime",
      description: "Pachanga is a Mexican-Style Lager with a crisp malt flavor and thirst-quenching character, perfect for hot days in the summer sun.",
      abv: "4.2%",
      taste: "Low bitterness, sublet sweetness, slight lingering bitterness",
      website: "https://www.sunkingbrewing.com/beer/core/pachanga/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641576071/Project%203%20/be_Different_10_y4ziad.png",
      type: "beer",
    },
    {
      title: "Rainbow Haze",
      style: "India Pale Ale",
      aroma: "Fruity",
      description: "Rainbow Haze is an IPA with a fruity hop character complimented by infused mango.",
      abv: "6.1",
      taste: "Mango",
      website: "https://www.sunkingbrewing.com/beer/seasonal-16oz/rainbow-haze/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641576069/Project%203%20/be_Different_9_zeavg0.png",
      type: "beer",
    },
    {
      title: "Keller Haze",
      style: "India Pale Ale",
      aroma: "Tropical fruit, pineapple, citrus",
      description: "Keller Haze is an IPA with pronounced flavors of pineapple, citrus, tropical fruit, and orange peel finished in a slightly hazy kellerbier style.",
      abv: "6.3%",
      taste: "Light sweetness, slighlty sweet linger, subtle bitterness",
      website: "https://www.sunkingbrewing.com/beer/core/keller-haze/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641575937/Project%203%20/be_Different_8_om6ila.png",
      type: "beer",
    },
    {
      title: "Hopped Up Chardonnay",
      style: "Chardonnay",
      aroma: "Citrus",
      description: "This is a delicious Chardonnay wine that has a hint of dry hopping. Right before bottling we dry hop this Chardoonay with Citra hops!",
      abv: "12%",
      taste: "Dry",
      website: "https://www.urban-vines.com/store/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641577542/Project%203%20/be_Different_19_fh6p4e.png",
      type: "wine",
    },
    {
      title: "Bourbon Barrel Cabernet Sauvignon",
      style: "Cabernet Sauvignon",
      aroma: "Oak",
      description: "Aged in oak this wine is very fruit forward. Hints of black cherry and blackberry. Light on tannins and easy to drink.",
      abv: "14%",
      taste: "Black Cherry and Blackbery",
      website: "https://www.urban-vines.com/store/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641576578/Project%203%20/be_Different_15_usy2u6.png",
      type: "wine",
    },
    {
      title: "Sangria",
      style: "Yum",
      aroma: "Citrus",
      description: " Grapes from Michigan.",
      abv: "7%",
      taste: "A sweet red wine blend with lime, lemon, and orange juices added for a fruity summer treat.",
      website: "https://www.urban-vines.com/store/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641576333/Project%203%20/be_Different_13_pwfguc.png",
      type: "wine",
    },
    {
      title: "Carnival Candy Wine",
      style: "Sweet",
      aroma: "Cotton Candy",
      description: "Taste just like Cotton Candy! Made with grapes from the Great Lakes growing region. The wine is slowly fermented to keep the natural cotton candy qualities of these grapes. This produces a delicious wine with hints of cotton candy.",
      abv: "11.50%",
      taste: "Cotton Candy",
      website: "https://www.urban-vines.com/store/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641577559/Project%203%20/be_Different_18_tqtmhw.png",
      type: "wine",
    },
    {
      title: "White Magic",
      style: "Sweet",
      aroma: "Lemon",
      description: "A sister wine to our famous Black Magic wine, a pleasantly sweet white wine perfect for any occasion with notes of orange blossom and lemon zest and refreshing acidity.",
      abv: "11%",
      taste: "Orange blossom and lemon zest",
      website: "https://www.urban-vines.com/store/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641577538/Project%203%20/be_Different_16_slyc5o.png",
      type: "wine",
    },
    {
      title: "Black Magic",
      style: "Sweet",
      aroma: "Blackberries",
      description: "A delicious sweet blend of concord grapes and fresh blackberries. An easy drinking wine that is soft on the palate and great for any occasion.",
      abv: "11.5%",
      taste: "Concord grapes and fresh blackberries.",
      website: "https://www.urban-vines.com/store/",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641577539/Project%203%20/be_Different_17_zzzswb.png",
      type: "wine",
    },
    {
      title: "American Straight Reserved Bourbon Whiskey",
      style: "Bourbon",
      aroma: "Soft Oak",
      description: "Aged 6 Years",
      abv: "45%",
      taste: "Cherry,vanilla, burnt sugar",
      website: "https://hoteltangodistillery.com/spirits/reserve-bourbon",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641578832/Project%203%20/be_Different_22_cyxzba.png",
      type: "liquor",
    },
    {
      title: "American Straight Rye Whiskey",
      style: "Deceptively smooth",
      aroma: "Spicy finish",
      description: "Sazerac-ready.",
      abv: "50%",
      taste: "Subtle sweetness",
      website: "https://hoteltangodistillery.com/spirits/rye-whiskey",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641578831/Project%203%20/be_Different_21_er5pv7.png",
      type: "liquor",
    },
    {
      title: "American Straight Bourbon Whiskey",
      style: "Bourbon",
      aroma: "Caramel",
      description: "Aged 2 Years",
      abv: "45%",
      taste: "Caramel",
      website: "https://hoteltangodistillery.com/spirits/bourbon",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641578828/Project%203%20/be_Different_20_gnx98e.png",
      type: "liquor",
    },
    {
      title: "Hotel Tango Vodka",
      style: "Vodka",
      aroma: "Clean",
      description: "Spirit Distilled from 100% Indiana Corn",
      abv: "40%",
      taste: "Smooth",
      website: "https://hoteltangodistillery.com/spirits/vodka",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641578833/Project%203%20/be_Different_23_lchdyn.png",
      type: "liquor",
    },
    {
      title: "Hotel Tango Gin",
      style: "Gin",
      aroma: "Citrus",
      description: "New Wave Style",
      abv: "45%",
      taste: "Citrus-Forward",
      website: "https://hoteltangodistillery.com/spirits/gin",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641578841/Project%203%20/be_Different_24_ddhg5c.png",
      type: "liquor",
    },
    {
      title: "Cherry Liqueur",
      style: "Liqueur",
      aroma: "Tart",
      description: "Vibrant Sweetness. Gives your mule a real kick",
      abv: "28%",
      taste: "Montmorency Cherry",
      website: "https://hoteltangodistillery.com/spirits/cherry-liqueur",
      imgURL: "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641578846/Project%203%20/be_Different_25_sd6mpx.png",
      type: "liquor",
    }
    
  ]

  //This inserts the bevs into database
  await Bev.insertMany(bevs)
  console.log('Created users & bevs!')

  db.close()
}
  
insertData()