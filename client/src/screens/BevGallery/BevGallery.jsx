import { useState, useEffect } from "react";
import "./BevGallery.css";
import { getBevs, getTypeBev } from "../../services/bevApi";
import BevPreview from "../../components/BevPreview/BevPreview";
import Nav from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";


export default function BevGallery({toggle, setToggle}) {
  const [bevs, setBevs] = useState([]);
  const [results, setResults] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchAllBevs = async () => {
      const allBevs = await getBevs();
      setBevs(allBevs);
    };
    fetchAllBevs();
  }, [toggle]);


  useEffect(() => {
    const fetchAllBevs = async () => {
      const foundType = await getTypeBev(params.typeOf);
      setResults(foundType);
    };
    fetchAllBevs()
  }, [params.typeOf, toggle]);


  return (
    <>
      <Nav setToggle={setToggle}/>
      <div className="bevContainer">

          {results && 
            results.map((bev) => (
              
                <BevPreview
                  _id={bev._id}
                  title={bev.title}
                imgURL={bev.imgURL}
                abv={bev.abv}
                  
                />
              
            ))}
          {params.typeOf === "all" &&
            bevs.map((bev) => (
              
                <BevPreview
                  _id={bev._id}
                  title={bev.title}
                imgURL={bev.imgURL}
                abv={bev.abv}
                  
                />
            ))}
      
      </div>
      </>
  );
}
