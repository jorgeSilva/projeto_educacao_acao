import React from 'react'
import style from './Home.module.css'
import { ReactComponent as IconSysTech} from '../assets/Home/SysTechLogo.svg'
import { ReactComponent as IconSetor} from '../assets/Home/iconSetor.svg'
import { ReactComponent as IconServidores} from '../assets/Home/iconServidores.svg'
import { ReactComponent as IconEscola} from '../assets/Home/iconEscola.svg'
import Setor from './setor/Setor'
import Servidores from './servidores/Servidores'
import Escola from './escola/Escola'
import ExitButton from '../utils/exit/ExitButton'
import { Context } from '../context/authContext'
import Search from '../utils/search/Search'

const Home = () => {
  const [btnHeader, setBtnHeader] = React.useState('Setor')
  const {
    handleLogout,
    authorized
  } = React.useContext(Context)

  React.useEffect(() => {
    if(!authorized){
      window.location.href = '/'
    }
  }, [authorized])

  return (
    <main className={style.home__body}>
      <header className={style.home__header}>
        <div className={style.home__header__icon__systech}>
          <IconSysTech/>
        </div>

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
              <button onClick={() => setBtnHeader('Escola')} className={style.home__header__icon__escola}>
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
              <button onClick={() => setBtnHeader('Escola')} className={style.home__header__icon__escola}>
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
              <button onClick={() => setBtnHeader('Escola')} className={style.home__header__icon__escola}>
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
              <button onClick={() => setBtnHeader('Escola')} className={style.home__header__icon__escola__active}>
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