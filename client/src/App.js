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
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import About from './screens/About/About';
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {

  const [user, setUser] = useState(null)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])
  

  return (
    <div className="App">
      <Layout user={user} setUser={setUser} >
      <Routes>
        <Route path='/' element={<Home user={user} setUser={setUser} toggle={toggle} setToggle={setToggle}/>} />
        <Route path="/create"
          element={user ? <CreateForm user={user} setToggle={setToggle}/>
            : <Navigate to="/bevs/all" />} />
        <Route path='/sign-up' element={<SignUp user={user} setUser={setUser}/>} />
        <Route path='/sign-in' element={<SignIn user={user} setUser={setUser} />} />
        <Route path='/edit/:id' element={<EditForm user={user} setToggle={setToggle}/>} />
          <Route path='/bev/:id' element={<BevID user={user} toggle={toggle}/>} />
        <Route path='/bevs/:typeOf' element={<BevGallery user={user} toggle={toggle} setToggle={setToggle}/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
      </Layout>
    
    </div>
  );
}

export default App;
