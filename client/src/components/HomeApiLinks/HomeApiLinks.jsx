
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
            <h1 >{`Welcome, ${user.username}`}</h1>
            <div className='center-buttons-7'>
              <button id='create-a-bev' onClick={() => { nav('/create') }}>Create <br />A Beverage</button>
              <img className='vl' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641416436/Project%203%20/Your_Craft_Logo_200_x_500_px_3_yh6vld.png"  alt="vertical-line" />
              <button id='sign-outRon' onClick={handleSignOut}>Sign Out</button>
              </div>
            <Carosel bevs={bevs}/>
          </div>
          :
          <div>
            <Carosel bevs={bevs}/>
            <h1 className='non-user-intro-7' >Brewers, Distillers, and Winemakers</h1> <br />
            <h2 className='non-user-action-7'>Create an account with us today to promote <br />  YourCraft!</h2>
              <div className='center-buttons-7'>
                <button id='sign-inRon' onClick={() => nav('/sign-in')}>Sign In</button>
                <img className='vl' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1641416436/Project%203%20/Your_Craft_Logo_200_x_500_px_3_yh6vld.png"  alt="vertical-line" />
                <button id='sign-upRon' onClick={() => nav('/sign-up')}>Sign Up</button>
              </div>
          </div>
      }
    </div>
  )
}

export default HomeApiLinks;