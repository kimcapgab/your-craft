import React from 'react'
import { useState } from 'react'
import { createBev } from '../../services/bevApi'
import { useNavigate } from 'react-router-dom'

export default function CreateForm() {

  const [bev, setBev] = useState({
    title: '',
    style: '',
    description: '',
    aroma: '',
    taste: '',
    ABV: '',
    website: '',
    imgURL: '',
    type: '',
  })

  const nav = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setBev({
      ...bev,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createBev(bev)
    nav(`/`)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <label for="type-selector">Type: </label>
        <select name="type" value={bev.type} id="type-selector" onChange={handleChange}>
          <option>Select a type</option>
          <option value="beer">Beer</option>
          <option value="wine">Wine</option>
          <option value="liquor">Liquor</option>
        </select>
      </form>
    </div>
  )
}
