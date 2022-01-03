import { useState, useEffect } from "react";
import "./BevGallery.css";
import { getBevs } from "../../services/bevApi";
import BevPreview from "../../components/BevPreview/BevPreview";
import Nav from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout"

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
      return bev.type === params.type;
    });
    setResults(foundType);
  }, [params.type]);

  return (
    <Layout>
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
          {params.type === "all" &&
            bevs.map((bev) => (
              
                <BevPreview
                  _id={bev._id}
                  name={bev.name}
                  imgURL={bev.imgURL}
                  
                />
            ))}
          +
        </div>
      </div>
    
  </Layout>
  );
}
