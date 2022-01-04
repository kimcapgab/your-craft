import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getBev } from '../../services/bevApi'
import { useNavigate } from 'react-router-dom'

export default function BevID({user}) {
  const [bev, setBev] = useState([])
  const { id } = useParams()
  const nav = useNavigate()

  useEffect(() => {
    const fetchBev = async () => {
      const bev = await getBev(id)
      setBev(bev)
    }
    fetchBev()
  }, [id])

  const {title, style, aroma, description, abv, taste, website, imgURL} = bev

  return (
    <div>
      <div>
        <img src={imgURL} />
      </div>
      <div>
        <p>{title}</p>
        <p>{style}</p>
        <p>{description}</p>
        <p>{aroma}</p>
        <p>{taste}</p>
        <p>{abv}</p>
        <p>{website}</p>
      </div>
      <button onClick={(e)=>{nav(`/bevs/all`)}}>Back</button>
      {
        user && <button onClick={(e)=>{nav(`/edit/${id}`)}}>Edit</button>
      }

      
    </div>
  )
}
