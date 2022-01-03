import { useState } from 'react'
import { getBevs } from '../../services/bevApi'
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

{/* <Link to='/bevs/all' id='allBevs'><h1 onClick={handleFilter('all')}>All</h1></Link>
<Link to='/bevs/beer' id='allBeer'><h1 onClick={handleFilter('beer')}>Beer</h1></Link>
<Link to='/bevs/wine' id='allWine'><h1 onClick={handleFilter('wine')}>Wine</h1></Link>
<Link to='/bevs/liquor' id='allBevs'><h1 onClick={handleFilter('liquor')}>Liquor</h1></Link> */}

export default Nav