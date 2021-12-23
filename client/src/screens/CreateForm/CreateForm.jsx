import React from 'react'
import {useState} from 'react'

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setBev({
      ...bev,
      [name]: value,
    })
  }



  return (
    <div>
      <form>
      <input
          placeholder='Title'
          value={bev.name}
          name='title'
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
