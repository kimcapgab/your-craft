import { Link } from 'react-router-dom'
import "./Nav.css"


const Nav = ({setToggle}) => {

  
  
  return (
    <nav>
      <div className='left-side-conatiner'></div>
      <div className='right-side-container'>
          <Link onClick={()=>setToggle(e=>!e)}to='/bevs/all' id='allBevs'>All</Link>
        <div className='inner-button-container-7'>
          <Link onClick={()=>setToggle(e=>!e)} to='/bevs/beer' id='allBeer'>Beer</Link>
          <Link onClick={()=>setToggle(e=>!e)} to='/bevs/wine' id='allWine'>Wine</Link>
          <Link onClick={()=>setToggle(e=>!e)} to='/bevs/liquor' id='allBevs'>Liquor</Link>
        </div>
      </div>
      </nav>
  )
}


export default Nav