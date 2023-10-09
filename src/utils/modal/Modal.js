import React from 'react'
import style from './Modal.module.css'
import { ReactComponent as IconExit } from '../../assets/Home/x-circle-fill.svg'
import { ReactComponent as SvgLogo } from '../../assets/Login/SysTechLogo.svg'
import { ReactComponent as SvgIcon } from '../../assets/Home/undraw_file_bundle_re_6q1e (1).svg'
import { cadContext } from '../../context/cadContext'
import Error from '../error/Error'
import Success from '../msgSuccess/Success'

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
    handleSelectSchool,
    input0, 
    input1, 
    input2, 
    input3, 
    input4, 
    input5, 
    input6, 
    input7, 
    input8, 
    success,
    error,
    loading,
    handleSubmit,
    setType,
    setSuccess,
    setError,
    selected,
    schools
  } = React.useContext(cadContext)
  

  React.useEffect(() => {
    setType(content.type)
  })

  return (  
    <>
    <article className={style.modal__container}>
      <section className={style.modal__content__button}>
        <button onClick={() => {
          content.setModal('')
          setSuccess('')
          setError('')
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
                            handleSubmit()
                          }}>
                          <span className="loader"></span>
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

                        <button onClick={handleSubmit}>Cadastrar</button>
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
                            handleSubmit()
                          }}>
                          <span className="loader"></span>
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

                        <button onClick={handleSubmit}>Cadastrar</button>
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
                        
                        <select onChange={handleSelectSchool}>
                          <option disabled></option>
                          {
                            schools && schools.map(item => (
                              <option key={item._id} value={selected}>
                                {item.nome}
                              </option>
                            ))
                          }
                        </select>

                        <button className={style.login__button__loading} >
                          <span className="loader"></span>
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
                          <option></option>
                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button onClick={handleSubmit}>
                          Cadastrar
                        </button>
                      </>
                    }

                    {
                      error && <Error content={error}/>
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
                        
                        <select onChange={handleSelectSchool}>
                          <option disabled></option>

                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button className={style.login__button__loading} >
                          <span className="loader"></span>
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
                        
                        <select onChange={handleSelectSchool}>
                        <option></option>

                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button onClick={handleSubmit}>
                          Cadastrar
                        </button>
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
                    {
                      loading ?
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='Nome aluno'/>

                        <input 
                          onChange={handleInput1}
                          type='date' 
                          value={input1} 
                          placeholder='Data de nascimento'/>

                        <input 
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder='Nome da mãe'/>
                          
                        <input 
                          onChange={handleInput3}
                          type='text' 
                          value={input3} 
                          placeholder='Nome da pai'/>
                        
                        <input 
                          onChange={handleInput4}
                          type='text' 
                          value={input4} 
                          placeholder='Rua'/>
                        
                        <input 
                          onChange={handleInput5}
                          type='text' 
                          value={input5} 
                          placeholder='Bairro'/>

                        <input 
                          onChange={handleInput6}
                          type='text' 
                          value={input6} 
                          placeholder='Numero da casa'/>

                        <input 
                          onChange={handleInput7}
                          type='text' 
                          value={input7} 
                          placeholder='Contato'/>

                        <input 
                          onChange={handleInput8}
                          type='text' 
                          value={input8} 
                          placeholder='Periodo'/>

                        <select onChange={handleSelectSchool}>
                        <option disabled></option>

                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button className={style.login__button__loading} >
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='Nome aluno'/>

                        <input 
                          onChange={handleInput1}
                          type='date' 
                          value={input1} 
                          placeholder='Data de nascimento'/>

                        <input 
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder='Nome da mãe'/>
                          
                        <input 
                          onChange={handleInput3}
                          type='text' 
                          value={input3} 
                          placeholder='Nome da pai'/>
                        
                        <input 
                          onChange={handleInput4}
                          type='text' 
                          value={input4} 
                          placeholder='Rua'/>
                        
                        <input 
                          onChange={handleInput5}
                          type='text' 
                          value={input5} 
                          placeholder='Bairro'/>

                        <input 
                          onChange={handleInput6}
                          type='text' 
                          value={input6} 
                          placeholder='Numero da casa'/>

                        <input 
                          onChange={handleInput7}
                          type='text' 
                          value={input7} 
                          placeholder='Contato'/>

                        <input 
                          onChange={handleInput8}
                          type='text' 
                          value={input8} 
                          placeholder='Periodo'/>
                        
                        <select onChange={handleSelectSchool}>
                          <option></option>
                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button onClick={handleSubmit}>
                          Cadastrar
                        </button>
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
                    {
                      loading ?
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='Nome escola'/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder='Modalidade'/>
                        
                        <input 
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder='Nasceu mais 1'/>

                        <button className={style.login__button__loading} >
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='Nome escola'/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder='Modalidade'/>
                        
                        <input 
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder='Nasceu mais 1'/>

                        <button onClick={handleSubmit}>
                          Cadastrar
                        </button>
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
                    {
                      loading ?
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='N° de turmas'/>
                        
                        <select onChange={handleSelectSchool}>
                          <option disabled></option>
                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button className={style.login__button__loading} >
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='N° de turmas'/>
                        
                        <select onChange={handleSelectSchool}>
                          <option></option>
                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button onClick={handleSubmit}>
                          Cadastrar
                        </button>
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
                    {
                      loading ?
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='N° de turmas'/>
                        
                        <select onChange={handleSelectSchool}>
                          <option disabled></option>
                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button className={style.login__button__loading} >
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='N° de turmas'/>
                        
                        <select onChange={handleSelectSchool}>
                          <option></option>
                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button onClick={handleSubmit}>
                          Cadastrar
                        </button>
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
                    {
                      loading ?
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='N° de turmas'/>

                        <input 
                          onChange={handleInput1} 
                          type='text' 
                          value={input1} 
                          placeholder='N° de turmas parciais'/>
                        
                        <input 
                          onChange={handleInput2} 
                          type='text' 
                          value={input2} 
                          placeholder='N° de turmas integrais'/>
                        
                        <select onChange={handleSelectSchool}>
                          <option disabled></option>
                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button className={style.login__button__loading} >
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='N° de turmas'/>

                        <input 
                          onChange={handleInput1} 
                          type='text' 
                          value={input1} 
                          placeholder='N° de turmas parciais'/>
                        
                        <input 
                          onChange={handleInput2} 
                          type='text' 
                          value={input2} 
                          placeholder='N° de turmas integrais'/>
                        
                        <select onChange={handleSelectSchool}>
                          <option ></option>
                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button onClick={handleSubmit}>
                          Cadastrar
                        </button>
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
          content.type && content.type === 'pre'
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
                    Cadastre as turmas de cada escola PRÉ
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
                          placeholder='N° de turmas'/>
                        
                        <select onChange={handleSelectSchool}>
                          <option></option>
                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button className={style.login__button__loading} >
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='N° de turmas'/>
                        
                        <select onChange={handleSelectSchool}>
                          <option></option>
                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button onClick={handleSubmit}>
                          Cadastrar
                        </button>
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
          content.type && content.type === 'creche'
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
                    Cadastre as turmas de cada escola CRECHE
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
                          placeholder='N° de turmas'/>
                        
                        <select onChange={handleSelectSchool}>
                          <option disabled></option>
                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button className={style.login__button__loading} >
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          type='text' 
                          value={input0} 
                          placeholder='N° de turmas'/>
                        
                        <select onChange={handleSelectSchool}>
                          <option></option>
                          {
                            schools[0] ? schools.map(item => (
                              <option key={item._id} value={item._id}>
                                {item.nome}
                              </option>
                            ))
                            :
                            <option>Ainda não tem escolas</option>
                          }
                        </select>

                        <button onClick={handleSubmit}>
                          Cadastrar
                        </button>
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
      }
      {
        success && <Success content={success}/>
      }
    </article>
    </>
  )
}

export default Modal