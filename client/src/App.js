import './App.css';
import Home from './screens/Home/Home'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import EditForm from './screens/EditForm/EditForm'
import BevGallery from './screens/BevGallery/BevGallery'
import BevID from './screens/BevID/BevID'
import CreateForm from './screens/CreateForm/CreateForm'
import { useEffect, useState } from 'react';
import {verifyUser} from './services/userApi'
import { Routes, Route , Navigate} from 'react-router-dom';



function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home user={user}/>} />
        <Route path="/create"
          element={user ? <CreateForm user={user} />
            : <Navigate to="/bevs/all" />} />
        <Route path='/sign-up' element={<SignUp user={user}/>} />
        <Route path='/sign-in' element={<SignIn user={user} />} />
        <Route path='/edit/:id' element={<EditForm user={user} />} />
        <Route path='/bevs/:id' element={<BevID user={user} />} />
        <Route path='/bevs' element={<BevGallery user={user} />} />
      </Routes>
      
    
    </div>
  );
}

export default App;
