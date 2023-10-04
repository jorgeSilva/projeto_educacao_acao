import React from 'react'
import style from './Modal.module.css'
import { ReactComponent as IconExit } from '../../assets/Home/x-circle-fill.svg'
import { ReactComponent as SvgLogo } from '../../assets/Login/SysTechLogo.svg'
import { ReactComponent as SvgIcon } from '../../assets/Home/undraw_file_bundle_re_6q1e (1).svg'


const Modal = ({content}) => {
  const [input0, setInput0] = React.useState('')
  const [input1, setInput1] = React.useState('')
  const [input2, setInput2] = React.useState('')
  const [input3, setInput3] = React.useState('')
  const [input4, setInput4] = React.useState('')
  const [input5, setInput5] = React.useState('')
  const [input6, setInput6] = React.useState('')
  const [input7, setInput7] = React.useState('')
  const [input8, setInput8] = React.useState('')
  const [input9, setInput9] = React.useState('')

  return (
    <article className={style.modal__container}>
      <section className={style.modal__content__button}>
        <button onClick={() => content.setModal('')} className={style.modal__button__close}>
          <IconExit/>
        </button>
      </section>
      {
        (
          content.type && content.type === 'setor'
          &&
          <section className={style.modal__content__form}>
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
                    Cadastre os funcionarios de cada setor
                  </h1>
                  <p className={style.login__text__aux}>
                  Os dados aqui coletados serão transformados em estatisticas
                  </p>

                  <form className={style.login__form}>
                    {/* {
                      loading ?
                      <>
                        <input onChange={handleChangeEmail} required type='email' value={email} placeholder='Email'/>
                        <input onChange={handleChangePassword} type='password' value={password} placeholder='Senha'/>
                        <button className={style.login__button__loading} onClick={handleLogin}>
                          <span class="loader"></span>
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
                    } */}
                  </form>
                </div>
              </section>
            </main>
          </section>
        )
        ||
        (
          content.type && content.type === 'convenio'
          &&
          <section className={style.modal__content__form}>
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
                    Cadastre os valores do convenio
                  </h1>
                  <p className={style.login__text__aux}>
                  Os dados aqui coletados serão transformados em estatisticas
                  </p>

                  <form className={style.login__form}>
                    {/* {
                      loading ?
                      <>
                        <input onChange={handleChangeEmail} required type='email' value={email} placeholder='Email'/>
                        <input onChange={handleChangePassword} type='password' value={password} placeholder='Senha'/>
                        <button className={style.login__button__loading} onClick={handleLogin}>
                          <span class="loader"></span>
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
                    } */}
                  </form>
                </div>
              </section>
            </main>
          </section>
        )
        ||
        (
          content.type && content.type === 'servidor'
          &&
          <section className={style.modal__content__form}>
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
                    Cadastre os servidores
                  </h1>
                  <p className={style.login__text__aux}>
                  Os dados aqui coletados serão transformados em estatisticas
                  </p>

                  <form className={style.login__form}>
                    {/* {
                      loading ?
                      <>
                        <input onChange={handleChangeEmail} required type='email' value={email} placeholder='Email'/>
                        <input onChange={handleChangePassword} type='password' value={password} placeholder='Senha'/>
                        <button className={style.login__button__loading} onClick={handleLogin}>
                          <span class="loader"></span>
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
                    } */}
                  </form>
                </div>
              </section>
            </main>
          </section>
        )
        ||
        (
          content.type && content.type === 'professor'
          &&
          <section className={style.modal__content__form}>
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
                    Cadastre os professores
                  </h1>
                  <p className={style.login__text__aux}>
                  Os dados aqui coletados serão transformados em estatisticas
                  </p>

                  <form className={style.login__form}>
                    {/* {
                      loading ?
                      <>
                        <input onChange={handleChangeEmail} required type='email' value={email} placeholder='Email'/>
                        <input onChange={handleChangePassword} type='password' value={password} placeholder='Senha'/>
                        <button className={style.login__button__loading} onClick={handleLogin}>
                          <span class="loader"></span>
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
                    } */}
                  </form>
                </div>
              </section>
            </main>
          </section>
        )
        ||
        (
          content.type && content.type === 'aluno'
          &&
          <section className={style.modal__content__form}>
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
                    Cadastre os alunos
                  </h1>
                  <p className={style.login__text__aux}>
                  Os dados aqui coletados serão transformados em estatisticas
                  </p>

                  <form className={style.login__form}>
                    {/* {
                      loading ?
                      <>
                        <input onChange={handleChangeEmail} required type='email' value={email} placeholder='Email'/>
                        <input onChange={handleChangePassword} type='password' value={password} placeholder='Senha'/>
                        <button className={style.login__button__loading} onClick={handleLogin}>
                          <span class="loader"></span>
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
                    } */}
                  </form>
                </div>
              </section>
            </main>
          </section>
        )
        ||
        (
          content.type && content.type === 'escola'
          &&
          <section className={style.modal__content__form}>
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
                    Cadastre as escolas
                  </h1>
                  <p className={style.login__text__aux}>
                  Os dados aqui coletados serão transformados em estatisticas
                  </p>

                  <form className={style.login__form}>
                    {/* {
                      loading ?
                      <>
                        <input onChange={handleChangeEmail} required type='email' value={email} placeholder='Email'/>
                        <input onChange={handleChangePassword} type='password' value={password} placeholder='Senha'/>
                        <button className={style.login__button__loading} onClick={handleLogin}>
                          <span class="loader"></span>
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
                    } */}
                  </form>
                </div>
              </section>
            </main>
          </section>
        )
        ||
        (
          content.type && content.type === 'aee'
          &&
          <section className={style.modal__content__form}>
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
                    Cadastre as turmas da AEE
                  </h1>
                  <p className={style.login__text__aux}>
                  Os dados aqui coletados serão transformados em estatisticas
                  </p>

                  <form className={style.login__form}>
                    {/* {
                      loading ?
                      <>
                        <input onChange={handleChangeEmail} required type='email' value={email} placeholder='Email'/>
                        <input onChange={handleChangePassword} type='password' value={password} placeholder='Senha'/>
                        <button className={style.login__button__loading} onClick={handleLogin}>
                          <span class="loader"></span>
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
                    } */}
                  </form>
                </div>
              </section>
            </main>
          </section>
        )
        ||
        (
          content.type && content.type === 'educacao-jovem-adulto'
          &&
          <section className={style.modal__content__form}>
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
                    Cadastre as turmas do EJA
                  </h1>
                  <p className={style.login__text__aux}>
                  Os dados aqui coletados serão transformados em estatisticas
                  </p>

                  <form className={style.login__form}>
                    {/* {
                      loading ?
                      <>
                        <input onChange={handleChangeEmail} required type='email' value={email} placeholder='Email'/>
                        <input onChange={handleChangePassword} type='password' value={password} placeholder='Senha'/>
                        <button className={style.login__button__loading} onClick={handleLogin}>
                          <span class="loader"></span>
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
                    } */}
                  </form>
                </div>
              </section>
            </main>
          </section>
        )
        ||
        (
          content.type && content.type === 'educacao-infantil'
          &&
          <section className={style.modal__content__form}>
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
                    Cadastre as turmas da educação infantil
                  </h1>
                  <p className={style.login__text__aux}>
                  Os dados aqui coletados serão transformados em estatisticas
                  </p>

                  <form className={style.login__form}>
                    {/* {
                      loading ?
                      <>
                        <input onChange={handleChangeEmail} required type='email' value={email} placeholder='Email'/>
                        <input onChange={handleChangePassword} type='password' value={password} placeholder='Senha'/>
                        <button className={style.login__button__loading} onClick={handleLogin}>
                          <span class="loader"></span>
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
                    } */}
                  </form>
                </div>
              </section>
            </main>
          </section>
        )
      }
    </article>
  )
}

export default Modal