import './BevPreview.css';
import { Link } from 'react-router-dom'

const BevPreview = (props) => {
    return (
        <div >
            <Link  to={`/bevs/${props._id}`}>
                <img  src={props.imgURL} alt={props.name} />
                <div>View</div>
            </Link>
        </div>
    )
}

export default BevPreview