import { useState } from 'react'
import { getBevs } from '../../services/bevApi'


const Nav = () => {


  
  return (
    <nav>
      <div className='left-side-conatiner'></div>
      <div className='right-side-container'>
        <Link to='/bevs' id='allBevs'></Link>
        <Link to='/bevs/beer' id='allBeer'></Link>
        <Link to='/bevs/wine' id='allWine'></Link>
        <Link to='/bevs/liquor' id='allBevs'></Link>
      </div>
      </nav>
  )
}
export default Nav