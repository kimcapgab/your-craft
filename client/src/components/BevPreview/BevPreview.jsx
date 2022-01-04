import './BevPreview.css';
import { Link } from 'react-router-dom'

const BevPreview = (props) => {
    return (
        <div >
            <Link  to={`/bev/${props._id}`}>
                <img  src={props.imgURL} alt={props.name} />
              
            </Link>
        </div>
    )
}

export default BevPreview