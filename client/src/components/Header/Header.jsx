import { Link } from "react-router-dom"
import logo from '../../screens/resources/YourCraftLogo.png'

const Header = () =>
  <header>
    <div id='logo-container'>
      <Link to='/' id='logo'><img src={logo} alt='Your Craft'/></Link>
    </div>
  </header>

  export default Header