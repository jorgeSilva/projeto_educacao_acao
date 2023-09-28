import React from 'react'
import { Context } from '../context/authContext'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const {
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
    email,
    password,
    authorized,
    loading,
    error
  } = React.useContext(Context)

  const navigate = useNavigate()

  React.useEffect(() => {
    authorized && navigate(`/home`)
  }, [authorized])

  return (
    <div>
      Login

      <form>
        {
          loading ?
          <>
            <input onChange={handleChangeEmail} type='email' value={email} placeholder='Email'/>
            <input onChange={handleChangePassword} type='password' value={password} placeholder='Senha'/>
            <button onClick={handleLogin}>Carregando</button>  
          </>
          :

          <>
            <input onChange={handleChangeEmail} type='email' value={email} placeholder='Email'/>
            <input onChange={handleChangePassword} type='password' value={password} placeholder='Senha'/>
            <button onClick={handleLogin}>Entrar</button>
          </>
        }

        {
          error && <p>{error}</p>
        }
      </form>
    </div>
  )
}

export default Login