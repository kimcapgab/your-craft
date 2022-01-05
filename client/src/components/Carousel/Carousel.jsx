
import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Carousel.css'
export default function Carosel({ bevs }) {
  const nav = useNavigate()
  const [revBev, setRevBev] = useState([])


  useEffect(() => {
    setRevBev(bevs.reverse())

  }, [bevs])
  
  return (
    <div >
      <h1 className='latest'>Latest Additions</h1>
      {revBev[0] && <Carousel >
      <Carousel.Item>
          <img
            className='carousel-img'
          name={revBev[0].name}
          src={revBev[0].imgURL}
          onClick={()=>nav(`/bev/${revBev[0]._id}`)}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='carousel-img'
          name={revBev[1].name}
          src={revBev[1].imgURL}
          onClick={()=>nav(`/bev/${revBev[1]._id}`)}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='carousel-img'
          name={revBev[2].name}
          src={revBev[2].imgURL}
          onClick={()=>nav(`/bev/${revBev[2]._id}`)}
          />
          </Carousel.Item>
      </Carousel>}
    </div>
  )
}


