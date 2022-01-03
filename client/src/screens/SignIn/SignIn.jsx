import React from 'react'
import { useState } from 'react'
import { signIn } from '../../services/userApi'
import {useNavigate} from 'react-router-dom'

export default function SignIn(props) {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
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
    try {
      const user = await signIn(form)
      setUser(user)
      navigate('/')
    } catch(error) {
      console.log(error)
      setForm({
        isError: true,
        errorMsg: 'invalid credentials',
        email: '',
        password: '',
      })
    }
  }
  const renderError = () => {
    const toggleForm = form.isError ? 'DANGER' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>{form.errorMsg}</button>
      )
    } else {
      return <button type='submit'> SIGN IN! </button>
    }
  }


  return (
    <div>
      <div>
        <h1>Sign In!</h1>
      </div>
      <form onSubmit={onSignIn}>
        <input name='email' type="email" placeholder="email" value={form.email} onChange={handleChange} />
        <input name='password' type="password" placeholder="password" value={form.password} onChange={handleChange} />
        {renderError()}
      </form>
    </div>
  )
}
