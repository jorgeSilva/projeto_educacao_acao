import React from "react";
import api from "../services/api";

const Context = React.createContext()

function AuthProvider({children}){
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState('')
  const [authorized, setAuthorized] = React.useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  async function handleLogin(e){
    e.preventDefault()
    
    setLoading(true)
    await api.post('/user/login', {
      email,
      password
    }).then(({data}) => {
      localStorage.setItem('token', JSON.stringify(data.token))
      setAuthorized(true)
      setLoading(false)
    }).catch(e => {
      setAuthorized(false)
      setError(e.response.data.error)
      setLoading(false)
      setPassword('')
    })
  }

  async function handleLogout(e){
    if(window.confirm('Você deseja deixar esta conta? ') === true){
      setAuthorized(false)
      localStorage.removeItem('token')
      api.defaults.headers.Authorization = undefined
      window.location.href = `/`
    }
  }

  return(
    <Context.Provider value={{handleChangeEmail, handleChangePassword, handleLogin, handleLogout, email, password, loading, error, authorized}}>
      {children}
    </Context.Provider>
  )
}

export {Context, AuthProvider}