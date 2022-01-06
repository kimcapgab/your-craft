import { useState, useEffect } from "react"
import { getBevs } from '../../services/bevApi'
import Nav from '../../components/Nav/Nav'
import HomeApiLinks from "../../components/HomeApiLinks/HomeApiLinks"
import "./Home.css"


export default function Home({user, setUser, toggle, }) {
  const [bevs, setBevs] = useState([])


  useEffect(() => {
    const fetchBevs = async () => {
      const allBevs = await getBevs()
      setBevs(allBevs)
    }
    fetchBevs()
  }, [toggle])



  return (
    <div>
      <Nav />
      <div className="home-parent">
      <div className="home-page-image-container-7">
        <div className="home-page-image-content-7">
          <p className="intro-home-7">If you’ve been drinking the mass marketed beer, wine or liquor produced
          by major companies for a long time, you should try out craft alcoholic beverages. Craft alcoholic
          beverage are made by small local and independent brewers, Winemakers, and Distillers who work hard
          to create rich, unique, flavours that the major companies hardly ever achieve in their large breweries,
            wineries and distilleries. They tell us what’s new and available, we tell you.
          </p>
        </div>
      </div>
      </div>
      <HomeApiLinks bevs={bevs} user={user} setUser={setUser} />
    </div>
  )
}