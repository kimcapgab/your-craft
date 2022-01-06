import './BevPreview.css';
import { Link } from 'react-router-dom'
import {useState} from 'react'


const BevPreview = (props) => {

  const [displayToggle, setDisplayToggle] = useState(false)


  return (
    <div onMouseEnter={() => setDisplayToggle(true)} onMouseLeave={() => setDisplayToggle(false)} className="card-1">{
      displayToggle === false &&
      <Link to={`/bev/${props._id}`}>
        <img id="img-link" src={props.imgURL} alt={props.name} />
      </Link>
    
    }
      {
        displayToggle === true &&
        <Link to={`/bev/${props._id}`}>
        <img id="img-link2" src={props.imgURL} alt={props.name} />
        <div className="bottom-card">
        <h3 className="card-title">{props.title}</h3>
        <h5 className="card-abv">{props.abv} Alcohol</h5>
        </div>
        </Link>
      }
    </div>
  )
}
export default BevPreview