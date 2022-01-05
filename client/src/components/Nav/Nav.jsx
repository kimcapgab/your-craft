import { Link } from 'react-router-dom'
import "./Nav.css"


const Nav = () => {

  
  
  return (
    <nav>
      <div className='left-side-conatiner'></div>
      <div className='right-side-container'>
        <Link to='/bevs/all' id='allBevs'>All</Link>
        <div className='inner-button-container-7'>
          <Link to='/bevs/beer' id='allBeer'>Beer</Link>
          <Link to='/bevs/wine' id='allWine'>Wine</Link>
          <Link to='/bevs/liquor' id='allBevs'>Liquor</Link>
        </div>
      </div>
      </nav>
  )
}


export default Nav