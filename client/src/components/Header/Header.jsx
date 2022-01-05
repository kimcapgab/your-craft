import { Link } from "react-router-dom"
import logo from '../../screens/resources/logo.png'
import './Header.css'

const Header = () =>
  <header>
    <div id='logo-container'>
      <Link to='/' ><img id='logo' src={logo} alt='Your Craft'/></Link>
    </div>
  </header>

  export default Header