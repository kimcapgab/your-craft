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
      <Link className='left-container-links' to='/'>Home</Link>
      <Link className='left-container-links' to='/AboutUs'>About</Link>
      <Link className='left-container-links' to='/bevs/all'>All</Link>
    </div>
    <div id='right-container' >
      
      {
        user === null &&
        <>
          <Link className='right-container-links' to='/sign-up'> Sign Up </Link>
          <Link className='right-container-links' to='/sign-in'> Sign In </Link>
        </>}
      {
        user &&
        <>
          <h3>{`Welcome, ${user.username}`}</h3>
          <h3 onClick={handleSignOut}> Sign Out </h3>
        </>}
    </div>
  </footer>
)
}
export default Footer