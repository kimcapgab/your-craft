import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () =>
  <footer>
    <div id='left-container'>
    <Link className='left-container-links' to='/'>Home</Link>
    <Link className='left-container-links' to='/AboutUs'>About</Link>
    <Link className='left-container-links' to='/bevs/all'>All</Link>
    </div>
    <div id='right-container'>
      <Link className='right-container-links' to='/sign-up'> Sign Up </Link>
      <Link className='right-container-links' to='/sign-in'> Sign In </Link>
    </div>
  </footer>

export default Footer