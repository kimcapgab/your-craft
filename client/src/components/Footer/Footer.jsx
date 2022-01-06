import './Footer.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {signOut} from '../../services/userApi'


const Footer = ({ user, setUser }) => {

  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut() 
    setUser(null)
    navigate('/')
  }


  return (
  <footer>
      <div id='left-container'>
        <div className='footer-left-left'>
        <h3 className='us'>YourCraft</h3>
        </div>
        
        <img className='vl' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641416436/Project%203%20/Your_Craft_Logo_200_x_500_px_3_yh6vld.png" alt="vertical-line" />
      <div className='footer-left-right'>
        <Link className='left-container-links' to='/'>Home</Link>
      <Link className='left-container-links' to='/AboutUs'>About</Link>
          <Link className='left-container-links' to='/bevs/all'>All</Link>
          </div>
    </div>
  
      
      {
        user === null &&
          <div className='footer-right'>
            
            <div className='footer-right-left'>
            <h3>Brewers, Distillers <br/> and Winemakers</h3>
            </div>
          <img className='vl' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641416436/Project%203%20/Your_Craft_Logo_200_x_500_px_3_yh6vld.png"  alt="vertical-line" />

          <div className='footer-right-right'>
          <Link className='right-container-links' to='/sign-up'> Sign Up </Link>
            <Link className='right-container-links' to='/sign-in'> Sign In </Link>

            </div> 
        </div>}
      {
        user &&
          <div className='footer-right'>
              <div className='footer-right-left'>
                <h3>{`Welcome, ${user.username}`}</h3>
                </div>
            <img className='vl' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641416436/Project%203%20/Your_Craft_Logo_200_x_500_px_3_yh6vld.png"  alt="vertical-line" />
          <div className='footer-right-right'>
                <h3 onClick={handleSignOut}> Sign Out </h3>
                </div>
        </div>}
 
  </footer>
)
}
export default Footer