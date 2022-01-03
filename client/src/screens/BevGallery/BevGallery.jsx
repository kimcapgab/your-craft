import { useState, useEffect } from "react";
import "./BevGallery.css";
import { getBevs } from "../../services/bevApi";
import Nav from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";



export default function BevGallery() {
  const [bevs, setBevs] = useState([]);
  const [filter, setFilter] = useState('all')
  const [results, setResults] = useState(null)
  const params = useParams()
  


  useEffect(() => {
    const fetchAllBevs = async () => {
      const allBevs = await getBevs();
      setBevs(allBevs);
    };
    fetchAllBevs();
  }, []); 


  
  useEffect(() => {
      const foundType = bevs.filter((bev) => {
        return bev.type === params.type
      })
      setResults(foundType)
  }, [params.type])


  return (
    // <Layout>
    <>
      <Nav />
      <div className="bevContainer">
        <div className="bevCard">

          { results && 
            results.map((bev) => (
            <>
              <h1>{bev.title}</h1>
              <h1>{bev.type}</h1>
            </>
            ))}
          { params.type === 'all' &&
            bevs.map((bev) => (
              <>
                <h1>{bev.title}</h1>
                <h1>{bev.type}</h1>
              </>
              ))
          }+
        </div>
      </div>
    </>
    // </Layout>
  );
}
