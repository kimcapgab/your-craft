import { useState, useEffect } from "react";
import "./BevGallery.css";
import { getBevs } from "../../services/bevApi";
import BevPreview from "../../components/BevPreview/BevPreview";
import Nav from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";


export default function BevGallery() {
  const [bevs, setBevs] = useState([]);
  const [results, setResults] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchAllBevs = async () => {
      const allBevs = await getBevs();
      setBevs(allBevs);
    };
    fetchAllBevs();
  }, []);

  useEffect(() => {
    const foundType = bevs.filter((bev) => {
      return bev.type === params.typeOf;
    });
    setResults(foundType);
  }, [params.typeOf]);

  return (
    <>
      <Nav />
      <div className="bevContainer">
        <div className="bevCard">
          {results &&
            results.map((bev) => (
              
                <BevPreview
                  _id={bev._id}
                  name={bev.name}
                  imgURL={bev.imgURL}
                  
                />
              
            ))}
          {params.typeOf === "all" &&
            bevs.map((bev) => (
              
                <BevPreview
                  _id={bev._id}
                  name={bev.name}
                  imgURL={bev.imgURL}
                  
                />
            ))}
        </div>
      </div>
      </>
  );
}
