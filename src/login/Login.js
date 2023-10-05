import React from 'react'
import { Context } from '../context/authContext'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as SvgLogo } from '../assets/Login/SysTechLogo.svg'
import { ReactComponent as SvgIcon } from '../assets/Login/effectSVG.svg'
import Error from '../utils/error/Error'

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
    <main className={style.login__body}>
      <section className={style.login__content}>
        <div className={style.login__left__side}>
          <section className={style.login__svg__logo}>
            <SvgLogo/>
          </section>

          <section className={style.login__svg__icon}>
            <SvgIcon/>
          </section>
        </div>

        <div className={style.login__rigth__side}>
          <h1 className={style.login__rigth__side__h1}>
            Acesse nosso sistema para um controle maior
          </h1>
          <p className={style.login__text__aux}>
            Cadastre os dados da secretaria
          </p>

          <h2 className={style.login__rigth__side__h2}>
            Login com Email e Senha
          </h2>

          <form className={style.login__form}>
            {
              loading ?
              <>
                <input onChange={handleChangeEmail} required type='email' value={email} placeholder='Email'/>
                <input onChange={handleChangePassword} type='password' value={password} placeholder='Senha'/>
                <button className={style.login__button__loading} onClick={handleLogin}>
                  <span className="loader"></span>
                </button>  
              </>
              :
              <>
                <input onChange={handleChangeEmail} required type='email' value={email} placeholder='Email'/>
                <input onChange={handleChangePassword} type='password' value={password} placeholder='Senha'/>
                <button onClick={handleLogin}>Entrar</button>
              </>
            }

            {
              ((!email || !password)  && error && <Error content={error}/>)
            }
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login