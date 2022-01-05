import './BevPreview.css';
import { Link } from 'react-router-dom'

const BevPreview = (props) => {
  return (
    <div className="card-1">
      <Link to={`/bev/${props._id}`}>
        <img id="img-link" src={props.imgURL} alt={props.name} />
      </Link>
    </div>
  )
}
export default BevPreview