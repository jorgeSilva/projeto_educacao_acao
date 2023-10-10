import React from 'react'
import style from './Home.module.css'
import { ReactComponent as IconSysTech} from '../assets/Home/SysTechLogo.svg'
import { ReactComponent as IconSetor} from '../assets/Home/iconSetor.svg'
import { ReactComponent as IconServidores} from '../assets/Home/iconServidores.svg'
import { ReactComponent as IconEscola} from '../assets/Home/iconEscola.svg'
import { ReactComponent as IconExit} from '../assets/Home/x-circle-fill.svg'
import { ReactComponent as IconMenu} from '../assets/Home/list.svg'
import Setor from './setor/Setor'
import Servidores from './servidores/Servidores'
import Escola from './escola/Escola'
import ExitButton from '../utils/exit/ExitButton'
import { Context } from '../context/authContext'
import Search from '../utils/search/Search'
import { buttonContext } from '../context/buttonShowContext'

const Home = () => {
  const [btnHeader, setBtnHeader] = React.useState('Setor')
  const [active, setActive] = React.useState(false)
  const [modal, setModal] = React.useState(false)
  const token = window.localStorage.getItem('token')

  const {
    handleLogout
  } = React.useContext(Context)

  const {
    setUrlPadrao,
    setType
  } = React.useContext(buttonContext)

  React.useEffect(() => {
    if(!token){
      window.location.href = '/'
    }

    if(btnHeader){
      setUrlPadrao(btnHeader)
    }

    if(window.visualViewport.width <= 667){
      setActive(true)
    } 
  }, [token, btnHeader])
    
  return (
    <main className={style.home__body}>
      <header className={style.home__header}>
        <div className={style.home__header__icon__systech}>
          <IconSysTech/>
        </div>

          <>
            {
              modal ? 
              <div className={style.home__content__modal}>
                <button onClick={() => setModal(!modal)} className={style.modal__button__open__active}>
                  <IconExit/>
                </button>

                <section className={style.home__header__buttons__active}>
                  {
                    (!btnHeader &&
                    <>
                      <button onClick={() => setBtnHeader('Setor')} className={style.home__header__icon__setor}>
                        <IconSetor/>
                      </button>
                      <button onClick={() => setBtnHeader('Servidores')} className={style.home__header__icon__serv}>
                        <IconServidores/>
                      </button>
                      <button onClick={() => {
                        setBtnHeader('Escola')
                        setType('Escola')
                      }} className={style.home__header__icon__escola}>
                        <IconEscola/>
                      </button> 
                    </>)

                    ||

                    (btnHeader === 'Setor' &&
                    <>
                      <button onClick={() => setBtnHeader('Setor')} className={style.home__header__icon__setor__active}>
                        <div>
                          <IconSetor/>
                        </div>
                        <p>Setor</p>
                      </button>
                      <button onClick={() => setBtnHeader('Servidores')} className={style.home__header__icon__serv}>
                        <IconServidores/>
                      </button>
                      <button onClick={() => {
                        setBtnHeader('Escola')
                        setType('Escola')
                      }} className={style.home__header__icon__escola}>
                        <IconEscola/>
                      </button> 
                    </>)

                    ||

                    (btnHeader === 'Servidores' &&
                    <>
                      <button onClick={() => setBtnHeader('Setor')} className={style.home__header__icon__setor}>
                        <IconSetor/>
                      </button>
                      <button onClick={() => setBtnHeader('Servidores')} className={style.home__header__icon__serv__active}>

                        <IconServidores/>
                        <p>Servidores</p>
                      </button>
                      <button onClick={() => {
                        setBtnHeader('Escola')
                        setType('Escola')
                      }} className={style.home__header__icon__escola}>
                        <IconEscola/>
                      </button> 
                    </>)

                    ||

                    (btnHeader === 'Escola' &&
                    <>
                      <button onClick={() => setBtnHeader('Setor')} className={style.home__header__icon__setor}>
                        <IconSetor/>
                      </button>
                      <button onClick={() => setBtnHeader('Servidores')} className={style.home__header__icon__serv}>
                        <IconServidores/>
                      </button>
                      <button onClick={() => {
                        setBtnHeader('Escola')
                        setType('Escola')
                      }} className={style.home__header__icon__escola__active}>
                        <IconEscola/>
                        <p>Escola</p>
                      </button> 
                    </>)
                  }
                </section>
              </div>

              :
              <button onClick={() => setModal(!modal)} className={style.modal__button__open}>
                <IconMenu/>
              </button>
            }

          </>
          <section className={style.home__header__buttons}>
            {
              (!btnHeader &&
              <>
                <button onClick={() => setBtnHeader('Setor')} className={style.home__header__icon__setor}>
                  <IconSetor/>
                </button>
                <button onClick={() => setBtnHeader('Servidores')} className={style.home__header__icon__serv}>
                  <IconServidores/>
                </button>
                <button onClick={() => {
                  setBtnHeader('Escola')
                  setType('Escola')
                }} className={style.home__header__icon__escola}>
                  <IconEscola/>
                </button> 
              </>)

              ||

              (btnHeader === 'Setor' &&
              <>
                <button onClick={() => setBtnHeader('Setor')} className={style.home__header__icon__setor__active}>
                  <div>
                    <IconSetor/>
                  </div>
                  <p>Setor</p>
                </button>
                <button onClick={() => setBtnHeader('Servidores')} className={style.home__header__icon__serv}>
                  <IconServidores/>
                </button>
                <button onClick={() => {
                  setBtnHeader('Escola')
                  setType('Escola')
                }} className={style.home__header__icon__escola}>
                  <IconEscola/>
                </button> 
              </>)

              ||

              (btnHeader === 'Servidores' &&
              <>
                <button onClick={() => setBtnHeader('Setor')} className={style.home__header__icon__setor}>
                  <IconSetor/>
                </button>
                <button onClick={() => setBtnHeader('Servidores')} className={style.home__header__icon__serv__active}>

                  <IconServidores/>
                  <p>Servidores</p>
                </button>
                <button onClick={() => {
                  setBtnHeader('Escola')
                  setType('Escola')
                }} className={style.home__header__icon__escola}>
                  <IconEscola/>
                </button> 
              </>)

              ||

              (btnHeader === 'Escola' &&
              <>
                <button onClick={() => setBtnHeader('Setor')} className={style.home__header__icon__setor}>
                  <IconSetor/>
                </button>
                <button onClick={() => setBtnHeader('Servidores')} className={style.home__header__icon__serv}>
                  <IconServidores/>
                </button>
                <button onClick={() => {
                  setBtnHeader('Escola')
                  setType('Escola')
                }} className={style.home__header__icon__escola__active}>
                  <IconEscola/>
                  <p>Escola</p>
                </button> 
              </>)
            }
          </section>
        
          
        <section className={style.home__header__search}>
          <Search/>
          <ExitButton content={handleLogout}/>
        </section>
      </header>

      {
        (btnHeader === 'Setor' && <Setor/>)
        ||
        (btnHeader === 'Servidores' && <Servidores/>)
        ||
        (btnHeader === 'Escola' && <Escola/>)
      }
    </main>
  )
}

export default Home