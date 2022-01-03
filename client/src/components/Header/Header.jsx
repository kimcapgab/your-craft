import { Link } from "react-router-dom"

const Header = () =>
  <header>
    <div id='logo-container'>
      <Link to='/' id='logo' />
    </div>
  </header>

  export default Header