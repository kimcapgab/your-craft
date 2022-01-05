import { useState, useEffect } from "react"
import { getBevs } from '../../services/bevApi'
import Nav from '../../components/Nav/Nav'
import HomeApiLinks from "../../components/HomeApiLinks/HomeApiLinks"


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
      <HomeApiLinks bevs={bevs} user={user} setUser={setUser} />
    </div>
  )
}