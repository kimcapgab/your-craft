import { useState, useEffect } from 'react'
import './BevGallery.css'
import { getBevs } from '../../services/bevApi'


export default function BevGallery() {
  const [bevs, setBevs] = useState([])

  useEffect(() => {
    const fetchAllBevs = async () => {
      const allBevs = await getBevs()
      setBevs(allBevs)
    }
    fetchAllBevs()
  },[])

  return (
    // <Layout>
    <div className='bevContainer'>
        <h1>Testing Gallery </h1>
        {
        bevs.map((bev) => (
          <h1>{bev.title}</h1>
        ))
        }
      </div>
    // </Layout>
  )
}
