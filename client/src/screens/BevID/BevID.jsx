import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBev } from "../../services/bevApi";
import { useNavigate } from "react-router-dom";
import "./BevID.css";

export default function BevID({ user }) {
  const [bev, setBev] = useState([]);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    const fetchBev = async () => {
      const bev = await getBev(id);
      setBev(bev);
    };
    fetchBev();
  }, [id]);

  const { title, style, aroma, description, abv, taste, website, imgURL } = bev;

  return (
    <div className="whole-detail">
      <div id="detail-top">
        <div id="bevimg">
          <img src={imgURL} alt={title} />
        </div>
        <div className="cardRon">
          <div id="details-top">
            <h3 id="bevtitle">{title}</h3>
            <div className="detail">
              <h3>Style: </h3>
              <h3>{style}</h3>
            </div>
            <div className="detail">
              <h3>Description: </h3>
              <h3>{description}</h3>
            </div>

            <h2>Characteristics</h2>
          </div>
          <div className="details-bottom">
            <div className="detail">
              <h3>Aroma: </h3>
              <h3>{aroma}</h3>
            </div>
            <div className="detail">
              <h3>Taste: </h3>
              <h3>{taste}</h3>
            </div>
            <div className="detail">
              <h3>Alcohol By Volume: </h3>
              <h3>{abv}</h3>
            </div>

            <a id='buy' href={website} rel="noreferrer" target="_blank">
              Buy Here
            </a>
          </div>
        </div>
      </div>
      <div id='details-button'>
      <button
        onClick={() => {
          nav(`/bevs/all`);
        }}
      >
        Back
      </button>
      {user && (
        <button
          onClick={() => {
            nav(`/edit/${id}`);
          }}
        >
          Edit
        </button>
      )}</div>
    </div>
  );
}
