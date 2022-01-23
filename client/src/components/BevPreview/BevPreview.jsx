import './BevPreview.css';
import { Link } from 'react-router-dom'

const BevPreview = (props) => {
  return (
<div className="card-1">
      <Link to={`/bev/${props._id}`}>
        <img id="img-link" src={props.imgURL} alt={props.name} />
      <div className="bottom">
        <h3 className="card-title">{props.title}</h3>
        <h5 className="card-abv">{props.abv} Alcohol</h5>
      </div>
      </Link>
</div >
  )
}
export default BevPreview