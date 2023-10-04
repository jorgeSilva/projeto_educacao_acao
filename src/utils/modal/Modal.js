import React from 'react'
import style from './Modal.module.css'
import { ReactComponent as IconExit } from '../../assets/Home/x-circle-fill.svg'
import { ReactComponent as SvgLogo } from '../../assets/Login/SysTechLogo.svg'
import { ReactComponent as SvgIcon } from '../../assets/Home/undraw_file_bundle_re_6q1e (1).svg'
import { cadContext } from '../../context/cadContext'
import Error from '../error/Error'
import Success from '../msgSuccess/Success'
import api from '../../services/api'

const Modal = ({content}) => {
  const {
    handleInput0, 
    handleInput1, 
    handleInput2, 
    handleInput3, 
    handleInput4, 
    handleInput5, 
    handleInput6, 
    handleInput7,
    handleInput8, 
    handleInput9, 
    input0, 
    input1, 
    input2, 
    input3, 
    input4,
    input5, 
    input6, 
    input7, 
    input8, 
    input9, 
    success,
    error,
    loading,
    handleSubmit,
    setType,
    setSuccess,
    setInput0,
    setInput1,
    setInput2,
    setInput3,
    setInput4,
    setInput5,
    setInput6,
    setInput7,
    setInput8,
    setInput9
  } = React.useContext(cadContext)

  console.log(input0, input1, input2, input3);
  const [schools, setSchools] = React.useState('')
  const [schoolsSelected, setSchoolsSelected] = React.useState('')

  async function schoolsGet(){
    await api.get('/escola/show').then(({data}) => setSchools(data)).catch(e => console.log(e))
  }

  const handleSelectSchool = async (e) =>{
    const s = schools.find((x) => x._id === e.target.value)
    setInput3(s._id);
 }

 console.log(input3);

  React.useEffect(() => {
    schoolsGet()
  }, [])

  return (  
    <>
    <article className={style.modal__container}>
      <section className={style.modal__content__button}>
        <button onClick={() => {
          content.setModal('')
          setInput0('')
          setInput1('')
          setInput2('')
          setInput3('')
          setInput4('')
          setInput5('')
          setInput6('')
          setInput7('')
          setInput8('')
          setInput9('')
          setSuccess('')
          window.location.reload()
        }} className={style.modal__button__close}>
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
                    {
                      loading ?
                      <>
                        <input 
                          onChange={handleInput0} 
                          required 
                          type='text' 
                          value={input0} 
                          placeholder='Nome'/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder='Setor'/>

                        <input
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder='Obs'/>

                        <button 
                          className={style.login__button__loading} onClick={(e) => {
                            e.preventDefault()
                            setType(content.type)
                            handleSubmit()
                          }}>
                          <span class="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0}
                          type='text' 
                          value={input0} 
                          placeholder='Nome'/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder='Setor'/>

                        <input
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder='Obs'/>

                        <p style={{fontFamily:'Inter', padding: '1rem'}}>Aperte duas vezes no botão 'Cadastrar' para realizar o cadastro</p>

                        <button onClick={(e) =>{
                          e.preventDefault()
                          setType(content.type)
                          handleSubmit()
                        }}>Cadastrar</button>
                      </>
                    }

                    {
                      !success && error && <Error content={error}/>
                    }
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
                    {
                      loading ?
                      <>
                        <input 
                          onChange={handleInput0} 
                          required 
                          type='text' 
                          value={input0} 
                          placeholder='Transporte'/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder='Merenda'/>

                        <button 
                          className={style.login__button__loading} onClick={(e) => {
                            e.preventDefault()
                            setType(content.type)
                            handleSubmit()
                          }}>
                          <span class="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          required 
                          type='number' 
                          value={input0} 
                          placeholder='Transporte'/>

                        <input 
                          onChange={handleInput1}
                          type='number' 
                          value={input1} 
                          placeholder='Merenda'/>

                        <p style={{fontFamily:'Inter', padding: '1rem'}}>Aperte duas vezes no botão 'Cadastrar' para realizar o cadastro</p>

                        <button onClick={(e) =>{
                          e.preventDefault()
                          setType(content.type)
                          handleSubmit()
                        }}>Cadastrar</button>
                      </>
                    }

                    {
                      !success && error && <Error content={error}/>
                    }
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
                    {
                      loading ?
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='Transporte'/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder='Merenda'/>
                        
                        <input 
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder='Cargo'/>
                        
                        <select 
                          onChange={handleSelectSchool}
                          value={input3} 
                          placeholder='Escola'>
                          {
                            schools && schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                          }
                        </select>

                        <p style={{fontFamily:'Inter', padding: '1rem'}}>Aperte duas vezes no botão 'Cadastrar' para realizar o cadastro</p>

                        <button 
                          className={style.login__button__loading} onClick={(e) => {
                            e.preventDefault()
                            setType(content.type)
                            handleSubmit()
                          }}>
                          <span class="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0}
                          type='text' 
                          value={input0} 
                          placeholder='Nome'/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder='Função'/>

                        <input 
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder='Cargo'/>
                        
                        <select onChange={handleSelectSchool}>
                          {
                            schools && schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                          }
                        </select>

                        <p style={{fontFamily:'Inter', padding: '1rem'}}>Aperte duas vezes no botão 'Cadastrar' para realizar o cadastro</p>

                        <button onClick={(e) =>{
                          e.preventDefault()
                          setType(content.type)
                          handleSubmit()
                        }}>Cadastrar</button>
                      </>
                    }

                    {
                      !success && error && <Error content={error}/>
                    }
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
                    {
                      loading ?
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='Nome'/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder='Cargo'/>
                        
                        <input 
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder='Escola'/>

                        <p style={{fontFamily:'Inter', padding: '1rem'}}>Aperte duas vezes no botão 'Cadastrar' para realizar o cadastro</p>

                        <button 
                          className={style.login__button__loading} onClick={(e) => {
                            e.preventDefault()
                            setType(content.type)
                            handleSubmit()
                          }}>
                          <span class="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0}
                          type='text' 
                          value={input0} 
                          placeholder='Nome'/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder='Cargo'/>
                        
                        <input 
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder='Escola'/>

                        <p style={{fontFamily:'Inter', padding: '1rem'}}>Aperte duas vezes no botão 'Cadastrar' para realizar o cadastro</p>

                        <button onClick={(e) =>{
                          e.preventDefault()
                          setType(content.type)
                          handleSubmit()
                        }}>Cadastrar</button>
                      </>
                    }

                    {
                      !success && error && <Error content={error}/>
                    }
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
      {
        success && <Success content={success}/>
      }
    </article>
    </>
  )
}

export default Modal