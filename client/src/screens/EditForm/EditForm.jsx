import React from 'react'
import { useState, useEffect } from 'react'
import { getBev, updateBev, deleteBev } from '../../services/bevApi'
import {useParams, useNavigate} from 'react-router-dom'

export default function EditForm({setToggle}) {
  
  const [bev, setBev] = useState({
    title: '',
    style: '',
    description: '',
    aroma: '',
    abv: '',
    taste: '',
    website: '',
    imgURL: '',
  })
  const [deleteToggle, setDeleteToggle] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  
  useEffect(() => {
    const fetchBev = async () => {
      const bev = await getBev(id)
      setBev(bev)
    }
    fetchBev()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setBev({
      ...bev,
      [name]: value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateBev(id, bev)
    navigate(`/bev/${id}`)
  }

  const handleDelete = () => {
    deleteBev(id);
    setToggle(e=>!e)
    navigate('/bevs/all')
}

  return (
    <div>
      <form>
      <input
          placeholder='Title'
          value={bev.title}
          name='title'
          onChange={handleChange}
        />
        <input
          placeholder='Style'
          value={bev.style}
          name='style'
          onChange={handleChange}
        />
        <input
          placeholder='Description'
          value={bev.description}
          name='description'
          onChange={handleChange}
        />
        <input
          placeholder='Aroma'
          value={bev.aroma}
          name='aroma'
          onChange={handleChange}
        />
        <input
          placeholder='Taste'
          value={bev.taste}
          name='taste'
          onChange={handleChange}
        />
        <input
          placeholder='ABV'
          value={bev.ABV}
          name='ABV'
          onChange={handleChange}
        />
        <input
          placeholder='Website'
          value={bev.website}
          name='website'
          onChange={handleChange}
        />
        <input
          placeholder='ImgURL'
          value={bev.imgURL}
          name='imgURL'
          onChange={handleChange}
        />
      </form>
      <div>
      
        {deleteToggle ? <div>
          <h3>Are You Sure?</h3>
          <h3 onClick={() => setDeleteToggle(false)}>No</h3>
          <h3 onClick={handleDelete}>Yes</h3>
        </div> : <div>
        <h3 onClick={handleSubmit}>Save</h3>
        <h3 onClick={() => setDeleteToggle(true)}>Delete</h3>
        </div>
          }
      </div>
    </div>
  )
}
