import { Link } from 'react-router-dom'


const Nav = () => {

  
  
  return (
    <nav>
      <div className='left-side-conatiner'></div>
      <div className='right-side-container'>
        <Link to='/bevs/all' id='allBevs'>All</Link>
        <Link to='/bevs/beer' id='allBeer'>Beer</Link>
        <Link to='/bevs/wine' id='allWine'>Wine</Link>
        <Link to='/bevs/liquor' id='allBevs'>Liquor</Link>
      </div>
      </nav>
  )
}


export default Nav