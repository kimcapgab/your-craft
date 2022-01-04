import { Link } from "react-router-dom"
import logo from '../../screens/resources/YourCraftLogo.png'
import './Header.css'

const Header = () =>
  <header>
    <div id='logo-container'>
      <Link to='/' ><img src={logo} alt='Your Craft'/></Link>
    </div>
  </header>

  export default Header