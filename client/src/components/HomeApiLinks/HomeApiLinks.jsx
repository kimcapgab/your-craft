
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../services/userApi'
import Carosel from '../Carousel/Carousel';
import "./HomeApiLinks.css"



function HomeApiLinks({ user, bevs, setUser}) {
  const nav = useNavigate()

  const handleSignOut = async () => {
    await signOut() 
    setUser(null)
    nav('/')
  }


  return (  
    <div>
      {
        user ?
          <div>
            <h1>{`Welcome, ${user.username}`}</h1>
            <button onClick={()=>{nav('/create')}}>Create A Beverage</button>
            <button onClick={handleSignOut}>Sign Out</button>
            <Carosel bevs={bevs}/>
          </div>
          :
          <div>
            <Carosel bevs={bevs}/>
            <h1>Brewers, Distillers, and Winemakers</h1>
            <h2>Create an account with us today to promote <br />  YourCraft!</h2>
              <div className='center-buttons-7'>
                <button onClick={() => nav('/sign-in')}>Sign In</button>
                <button onClick={() => nav('/sign-up')}>Sign Up</button>
              </div>
          </div>
      }
    </div>
  )
}

export default HomeApiLinks;