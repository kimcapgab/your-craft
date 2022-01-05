import { Link } from 'react-router-dom'


const Nav = () => {

  
  
  return (
    <nav>
      <div className='left-side-conatiner'></div>
      <div className='right-side-container'>
        <button to='/bevs/all' id='allBevs'>All</button>
        <div className='inner-button-container-7'>
          <button to='/bevs/beer' id='allBeer'>Beer</button>
          <button to='/bevs/wine' id='allWine'>Wine</button>
          <button to='/bevs/liquor' id='allBevs'>Liquor</button>
        </div>
      </div>
      </nav>
  )
}


export default Nav