import React from 'react'
import {useState} from 'react'

export default function SignIn() {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  return (
    <div>
      <div>
        <h1>Sign In!</h1>
      </div>
      <form>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button">Sign In!</button>
      </form>
    </div>
  )
}
