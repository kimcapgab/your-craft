import React from "react";
import { useState, useEffect } from "react";
import { getBev, updateBev, deleteBev } from "../../services/bevApi";
import { useParams, useNavigate } from "react-router-dom";
import "./EditForm.css";

export default function EditForm({ setToggle }) {
  const [bev, setBev] = useState({
    title: "",
    style: "",
    description: "",
    aroma: "",
    abv: "",
    taste: "",
    website: "",
    imgURL: "",
  });
  const [deleteToggle, setDeleteToggle] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBev = async () => {
      const bev = await getBev(id);
      setBev(bev);
    };
    fetchBev();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBev({
      ...bev,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBev(id, bev);
    navigate(`/bev/${id}`);
  };

  const handleDelete = () => {
    deleteBev(id);
    setToggle((e) => !e);
    navigate("/bevs/all");
  };

  return (
    <div>
        <form id="edit-form" onSubmit={handleSubmit}>
          <div id="left-container-edit-form">
            {bev.imgURL !== "" && (
              <img
                src={bev.imgURL}
                id="bev-edit-image"
                alt="preview of image"
              />
            )}
            <div id="image-preview">
              <p>
                URL for Image of Beverage (Transparent Backgrounds Work Best){" "}
              </p>
              <input
                className="left-container-edit-item"
                value={bev.imgURL}
                name="imgURL"
                onChange={handleChange}
              />
            </div>
            <label for="type-selector">Type: </label>
            <select
              className="left-container-edit-item"
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
            <div id="top-bev-card">
              <input
                className="bev-card-edit-item space-me"
                id="right-title"
                placeholder="Title:"
                value={bev.title}
                name="title"
                onChange={handleChange}
              />
              <input
                className="bev-card-edit-item space-me"
                id="right-style"
                placeholder="Style:"
                value={bev.style}
                name="style"
                onChange={handleChange}
              />
              <input
                className="bev-card-edit-item space-me"
                id="description"
                type="textarea"
                placeholder="Description:"
                value={bev.description}
                name="description"
                onChange={handleChange}
              />
              <h2>Characteristics</h2>
            </div>
            <div id="bottom-bev-edit-card">
              <div className="bottom-right-edit-input">
                <p>Aroma:</p>
                <input
                  className="bev-card-item"
                  id="right-aroma"
                  value={bev.aroma}
                  name="aroma"
                  onChange={handleChange}
                />
              </div>
              <div className="bottom-right-edit-input">
                <p>Taste:</p>
                <input
                  className="bev-card-edit-item"
                  id="right-taste"
                  value={bev.taste}
                  name="taste"
                  onChange={handleChange}
                />
              </div>
              <div className="bottom-right-edit-input">
                <p>ABV:</p>
                <input
                  className="bev-card-edit-item"
                  id="right-abv"
                  type="number"
                  value={bev.abv}
                  name="abv"
                  onChange={handleChange}
                />
              </div>
              <div className="bottom-right-edit-input">
                <p>Link to Buy:</p>
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
        </form>

        {deleteToggle ? (
          <div>
            <h3>Are You Sure?</h3>
            <h3 onClick={() => setDeleteToggle(false)}>No</h3>
            <h3 onClick={handleDelete}>Yes</h3>
          </div>
        ) : (
          <div id='save-edits'>
            <h3 className='save-edits-submit' onClick={handleSubmit}>Save</h3>
            <h3 className='save-edits-submit' onClick={() => setDeleteToggle(true)}>Delete</h3>
          </div>
        )}
      </div>
  );
}
