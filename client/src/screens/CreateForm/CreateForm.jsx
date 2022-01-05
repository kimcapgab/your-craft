import React from "react";
import { useState } from "react";
import { createBev } from "../../services/bevApi";
import { useNavigate } from "react-router-dom";
import './CreateForm.css'

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
      <form id='create-form' onSubmit={handleSubmit}>
      <div id='left-container-create-form'>
        <input
          className="left-container-item"
          placeholder="URL for Image (preferrably with a transparent background)"
          value={bev.imgURL}
          name="imgURL"
          onChange={handleChange}
        />
        <label for="type-selector">Type: </label>
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
        <div id='bev-card-container'>
        <input
          className="bev-card-item"
          placeholder="Title"
          value={bev.title}
          name="title"
          onChange={handleChange}
        />
        <input
          className="bev-card-item"
          placeholder="Style"
          value={bev.style}
          name="style"
          onChange={handleChange}
        />
        <input
          className="bev-card-item"
          placeholder="Description"
          value={bev.description}
          name="description"
          onChange={handleChange}
        />
        <input
          className="bev-card-item"
          placeholder="Aroma"
          value={bev.aroma}
          name="aroma"
          onChange={handleChange}
        />
        <input
          className="bev-card-item"
          placeholder="Taste"
          value={bev.taste}
          name="taste"
          onChange={handleChange}
        />
        <input
          className="bev-card-item"
          type="number"
          placeholder="ABV"
          value={bev.abv}
          name="abv"
          onChange={handleChange}
        />
        <input
          className="bev-card-item"
          placeholder="Website"
          value={bev.website}
          name="website"
          onChange={handleChange}
        />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
  );
}
