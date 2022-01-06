import React from "react";
import { useState } from "react";
import { createBev } from "../../services/bevApi";
import { useNavigate } from "react-router-dom";
import "./CreateForm.css";


export default function CreateForm({ setToggle }) {
  const [bev, setBev] = useState({
    title: "",
    style: "",
    description: "",
    aroma: "",
    taste: "",
    abv: "",
    website: "",
    imgURL: "",
    type: "",
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBev({
      ...bev,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBev(bev);
    setToggle((e) => !e);
    nav(`/`);
  };

  return (
    <form id="create-form" onSubmit={handleSubmit}>
      <div id="left-container-create-form">
        { bev.imgURL !== '' && 
          <img src={bev.imgURL} id='bev-image'alt='preview of image' />}
        <div id='image-preview'>
          <p>URL for Image of Beverage (Vertical Images with Transparent Backgrounds Work Best)  </p>
        <input
          className="left-container-item"
          value={bev.imgURL}
          name="imgURL"
          onChange={handleChange}
          />
          </div>
        <label for="type-selector"> < br/> </label>
        <select
          className="left-container-item"
          name="type"
          value={bev.type}
          id="type-selector"
          onChange={handleChange}
        >
          <option>Select a type</option>
          <option value="beer">Beer</option>
          <option value="wine">Wine</option>
          <option value="liquor">Liquor</option>
        </select>
      </div>
      <div id="bev-card-container">
        <h2 className="required-text">All fields are required</h2>
        <div id="top-bev-card">
          <input
            className="bev-card-item space-me"
            id="right-title"
            placeholder="Enter Title"
            value={bev.title}
            name="title"
            onChange={handleChange}
          />
          </div>
        <div id="bottom-bev-card">
          <div className="bev-id-top-form">
          <div className='bottom-right-input'>
          <h3>Style:</h3>
          <input
            className="bev-card-item space-me"
            id="right-style"
            value={bev.style}
            name="style"
            onChange={handleChange}
              />
            </div>
            < br/>
            <div className='bottom-right-input'>
          <h3>Description:</h3>
          <input
            className="bev-card-item space-me"
            id="description"
            type='textarea'
            value={bev.description}
            name="description"
            onChange={handleChange}
              />
              </div>
          </div>
          < br />
          <h2>Characteristics</h2>
        
        
          <div className='bottom-right-input'>
            <h3 className="create-p-tags">Aroma: </h3>
            <input
              className="bev-card-item"
              id="right-aroma"
              value={bev.aroma}
              name="aroma"
              onChange={handleChange}
            />
          </div>
          <div className='bottom-right-input'>
            <h3 className="create-p-tags">Taste: </h3>
            <input
              className="bev-card-item"
              id="right-taste"
              value={bev.taste}
              name="taste"
              onChange={handleChange}
            />
          </div>
          <div className='bottom-right-input'>
            <h3 className="create-p-tags">Alcohol By Volume: </h3>
            <input
              className="bev-card-item"
              id="right-abv"
            
              value={bev.abv}
              name="abv"
              onChange={handleChange}
            />
          </div>
          <div className='bottom-right-input'>
            <h3 className="create-h3-tag">Link to Buy: </h3>
            <input
              className="bev-card-item"
              id="right-website"
              value={bev.website}
              name="website"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div id="bev-card-submit">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );
}
