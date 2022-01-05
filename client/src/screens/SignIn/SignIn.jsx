import React from 'react'
import { useState } from 'react'
import { signIn } from '../../services/userApi'
import { useNavigate } from 'react-router-dom'
import { checkSpCharacters } from '../../utility/checker'
import './SignIn.css'

export default function SignIn(props) {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,

  })
  }
  
  const onSignIn = async (e) => {
    e.preventDefault()
    const { setUser } = props
    if (checkSpCharacters(form.username)) {
      setForm({
        isError: true,
        errorMsg: 'Username contains unapproved special characters',
        username: '',
        password: '',
      })
    } else if (checkSpCharacters(form.password)) {
      setForm({
        isError: true,
        errorMsg: 'Password contains unapproved special characters',
        username: '',
        password: '',
      })
    } else {
      try {
        const user = await signIn(form)
        setUser(user)
        navigate('/')
      } catch (error) {
        console.log(error)
        setForm({
          isError: true,
          errorMsg: 'invalid credentials',
          email: '',
          password: '',
        })
      }
    }
  }
  const renderError = () => {
    const toggleForm = form.isError ? 'DANGER' : ''
    if (form.isError) {
      return (
        <>
          <h3>{form.errorMsg}</h3>
          <button className='buttonRg' type='submit' className={toggleForm}>Let's Try That Again</button>
          </>
      )
    } else {
      return <button className='buttonRg' type='submit'>Sign In</button>
    }
  }


  return (
    <div className='sign-in'>
      <div>
        <h1 className='welcome-back'>Welcome Back</h1>
      </div>
      <form className='sign-in-form' onSubmit={onSignIn}>
        <p>Username</p>
        <input name='username' type="text" value={form.username} onChange={handleChange} />
        <p>Password</p>
        <input name='password' type="password"  value={form.password} onChange={handleChange} />
        {renderError()}
      </form>
    </div>
  )
}
