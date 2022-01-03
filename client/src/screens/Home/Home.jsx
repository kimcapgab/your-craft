import Carosel from "../../components/Carousel/Carousel"
import { useState, useEffect } from "react"
import { getBevs } from '../../services/bevApi'
import Layout from '../../components/Layout/Layout'


export default function Home() {
  const [bevs, setBevs] = useState([])

  useEffect(() => {
    const fetchBevs = async () => {
      const allBevs = await getBevs()
      setBevs(allBevs)
    }
    fetchBevs()
  }, [])



  return (
    <Layout>
    <div>
      <Carosel bevs={bevs}/>
      </div>
      </Layout>
  )
}