import React from 'react'
import { useState } from 'react'
import { signUp } from '../../services/userApi'
import {useNavigate} from 'react-router-dom'

export default function SignUp(props) {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
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
  const renderError = () => {
    const toggleForm = isError ? "Error" : ""
    if (isError) {
      return (
        <button type="submit" className={toggleForm}>{errorMsg}</button>
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
