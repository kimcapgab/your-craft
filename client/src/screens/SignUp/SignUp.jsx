import React from 'react'
import { useState } from 'react'
import { signUp } from '../../services/userApi'
import { useNavigate } from 'react-router-dom'
import { checkSpCharacters } from '../../utility/checker'
import {checkMatch} from '../../utility/checker'

export default function SignUp({ setUser }) {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const onSignUp = async (e) => {
    e.preventDefault()
    if (checkMatch(password, confirmPassword)) {
      
      if (checkSpCharacters(username)) {
        setIsError(true)
        setErrorMsg('Username contains unapproved special characters')
      } else if (checkSpCharacters(email)) {
        setIsError(true)
        setErrorMsg('Email contains unapproved special characters')
      } else if (checkSpCharacters(password)) {
        setIsError(true)
        setErrorMsg('Password contains unapproved special characters')
      } else {
    
        const newUser = {
          username,
          email,
          password,
        }
        try {
          const user = await signUp(newUser)
          setUser(user)
          navigate('/')
        } catch (error) {
          setIsError(true)
          setErrorMsg('Sign Up Details Invalid')
          console.log(error)
        }
      }
    } else {
      setIsError(true)
      setErrorMsg('Passwords must Match')
    }
    
  }
  function renderError ()  {
    const toggleForm = isError ? "Error" : ""
    if (isError === true) {
      return (<>
        <h2>{errorMsg}</h2>
        <button type="submit">Try Again</button>
      </>
      )
    } else {
      return <button type="submit">Sign Up</button>
    }
  }
  return (
    <div>
      <div>
        <h2>Sign Up Here!</h2>
      </div>
      <form onSubmit={onSignUp}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      {renderError()}
      </form>
    </div>
  )
}
