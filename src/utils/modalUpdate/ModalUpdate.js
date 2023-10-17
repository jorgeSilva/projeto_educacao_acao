import React from 'react'
import style from './ModalUpdate.module.css'
import { ReactComponent as IconExit } from '../../assets/Home/x-circle-fill.svg'
import { cadContext } from '../../context/cadContext';
import Error from '../error/Error'
import Success from '../msgSuccess/Success'

const ModalUpdate = ({content}) => {
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
    handleEdit,
    setType,
    setLoading,
    setSelected,
    setSelectUser,
    setSuccess,
    setError,
    selected,
    schools
  } = React.useContext(cadContext)

  React.useEffect(() => {
    setSelectUser(content.item._id)
    setType(content.type)
  }, [input0, input1, input2, input3, input4, input5, input6, input7, input8])

  console.log(content.item);

  return (
    <article className={style.modal__container}>
      <section className={style.modal__content__button}>
        <button onClick={() => {
          content.setActive('')
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
                 <div className={style.login__rigth__side}>
                  <h1 className={style.login__rigth__side__h1}>
                    Edite as informações
                  </h1>
                  <p className={style.login__text__aux}>
                    Altere as informações dos seus funcionarios já cadastrados
                  </p>

                  <form className={style.login__form}>
                    {
                      loading ?
                      <>
                        <input 
                          onChange={handleInput0} 
                          required 
                          type='text' 
                          value={content.item.nome} 
                          placeholder={`${content.item.nome}`}/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder={`${content.item.setor}`}/>

                        <input
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder={`${content.item.obs}`}/>

                        <button 
                          className={style.login__button__loading} onClick={(e) => {
                            e.preventDefault()
                          }}>
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0}
                          required 
                          type='text' 
                          value={input0} 
                          placeholder={`${content.item.nome}`}/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder={`${content.item.setor}`}/>

                        <input
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder={`${content.item.obs}`}/>

                        <button onClick={handleEdit}>Editar</button>
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
                 <div className={style.login__rigth__side}>
                  <h1 className={style.login__rigth__side__h1}>
                    Edite as informações
                  </h1>
                  <p className={style.login__text__aux}>
                    Altere as informações do convênio
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
                          placeholder={`${content.item.convenio}`}/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder={`${content.item.pmi}`}/>

                        <input
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder={`${content.item.see}`}/>
                        
                        <input
                          onChange={handleInput3}
                          type='text' 
                          value={input3} 
                          placeholder={`${content.item.contraPartida}`}/>

                        <input
                          onChange={handleInput4}
                          type='date' 
                          value={input4} 
                          placeholder={`${content.item.date}`}/>

                        <button 
                          className={style.login__button__loading} onClick={(e) => {
                            e.preventDefault()
                          }}>
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          required 
                          type='text' 
                          value={input0} 
                          placeholder={`${content.item.convenio}`}/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder={`${content.item.pmi}`}/>

                        <input
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder={`${content.item.see}`}/>
                        
                        <input
                          onChange={handleInput3}
                          type='text' 
                          value={input3} 
                          placeholder={`${content.item.contraPartida}`}/>

                        <input
                          onChange={handleInput4}
                          type='date' 
                          value={input4} 
                          placeholder={`${content.item.date}`}/>

                        <button onClick={handleEdit}>Editar</button>
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
          content.type && content.type === 'professores'
          &&
          <section className={style.modal__content__form}>
            <main className={style.login__body}>
              <section className={style.login__content}>
                 <div className={style.login__rigth__side}>
                  <h1 className={style.login__rigth__side__h1}>
                    Edite as informações
                  </h1>
                  <p className={style.login__text__aux}>
                    Altere as informações de determinado professor
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
                          placeholder={`${content.item.nome}`}/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder={`${content.item.funcao}`}/>

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

                        <button 
                          className={style.login__button__loading} onClick={(e) => {
                            e.preventDefault()
                          }}>
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                       <input 
                          onChange={handleInput0} 
                          required 
                          type='text' 
                          value={input0} 
                          placeholder={`${content.item.nome}`}/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder={`${content.item.funcao}`}/>

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

                        <button onClick={handleEdit}>Editar</button>
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
          content.type && content.type === 'servidores'
          &&
          <section className={style.modal__content__form}>
            <main className={style.login__body}>
              <section className={style.login__content}>
                 <div className={style.login__rigth__side}>
                  <h1 className={style.login__rigth__side__h1}>
                    Edite as informações
                  </h1>
                  <p className={style.login__text__aux}>
                    Altere as informações de determinado servidor
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
                          placeholder={`${content.item.nome}`}/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder={`${content.item.funcao}`}/>

                        <input 
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder={`${content.item.cargo}`}/>

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

                        <button 
                          className={style.login__button__loading} onClick={(e) => {
                            e.preventDefault()
                          }}>
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                       <input 
                          onChange={handleInput0} 
                          required 
                          type='text' 
                          value={input0} 
                          placeholder={`${content.item.nome}`}/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1} 
                          placeholder={`${content.item.funcao}`}/>
                        
                        <input 
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder={`${content.item.cargo}`}/>

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

                        <button onClick={handleEdit}>Editar</button>
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
          content.type && content.type === '0a3anos'
          &&
          <section className={style.modal__content__form}>
            <main className={style.login__body}>
              <section className={style.login__content}>
                 <div className={style.login__rigth__side}>
                  <h1 className={style.login__rigth__side__h1}>
                    Edite as informações
                  </h1>
                  <p className={style.login__text__aux}>
                    Altere a quantidade de alunos 0 à 3 anos
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
                          placeholder={`${content.item.alunos0a3}`}/>

                        <button 
                          className={style.login__button__loading} onClick={(e) => {
                            e.preventDefault()
                          }}>
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          required 
                          type='text' 
                          value={input0} 
                          placeholder={`${content.item.alunos0a3}`}/>

                        <button onClick={handleEdit}>Editar</button>
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
          content.type && content.type === 'alunos4'
          &&
          <section className={style.modal__content__form}>
            <main className={style.login__body}>
              <section className={style.login__content}>
                 <div className={style.login__rigth__side}>
                  <h1 className={style.login__rigth__side__h1}>
                    Edite as informações
                  </h1>
                  <p className={style.login__text__aux}>
                    Altere a quantidade de alunos de 4 anos
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
                          placeholder={`${content.item.alunos4}`}/>

                        <button 
                          className={style.login__button__loading} onClick={(e) => {
                            e.preventDefault()
                          }}>
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          required 
                          type='text' 
                          value={input0} 
                          placeholder={`${content.item.alunos4}`}/>

                        <button onClick={handleEdit}>Editar</button>
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
          content.type && content.type === 'alunos5'
          &&
          <section className={style.modal__content__form}>
            <main className={style.login__body}>
              <section className={style.login__content}>
                 <div className={style.login__rigth__side}>
                  <h1 className={style.login__rigth__side__h1}>
                    Edite as informações
                  </h1>
                  <p className={style.login__text__aux}>
                    Altere a quantidade de alunos de 5 anos
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
                          placeholder={`${content.item.alunos5}`}/>

                        <button 
                          className={style.login__button__loading} onClick={(e) => {
                            e.preventDefault()
                          }}>
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          required 
                          type='text' 
                          value={input0} 
                          placeholder={`${content.item.alunos5}`}/>

                        <button onClick={handleEdit}>Editar</button>
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
                 <div className={style.login__rigth__side}>
                  <h1 className={style.login__rigth__side__h1}>
                    Edite as informações
                  </h1>
                  <p className={style.login__text__aux}>
                    Altere a quantidade de alunos de 5 anos
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
                          placeholder={`${content.item.nTurmas}`}/>
                        
                        <input 
                          onChange={handleInput1} 
                          required 
                          type='text' 
                          value={input1} 
                          placeholder={`${content.item.parcial}`}/>

                        <input 
                          onChange={handleInput2} 
                          required 
                          type='text' 
                          value={input2} 
                          placeholder={`${content.item.integral}`}/>

                        <button 
                          className={style.login__button__loading} onClick={(e) => {
                            e.preventDefault()
                          }}>
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          required 
                          type='text' 
                          value={input0} 
                          placeholder={`${content.item.nTurmas}`}/>
                        
                        <input 
                          onChange={handleInput1} 
                          required 
                          type='text' 
                          value={input1} 
                          placeholder={`${content.item.parcial}`}/>

                        <input 
                          onChange={handleInput2} 
                          required 
                          type='text' 
                          value={input2} 
                          placeholder={`${content.item.integral}`}/>

                        <button onClick={handleEdit}>Editar</button>
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
          content.type && content.type === 'escolaN1C'
          &&
          <section className={style.modal__content__form}>
            <main className={style.login__body}>
              <section className={style.login__content}>
                 <div className={style.login__rigth__side}>
                  <h1 className={style.login__rigth__side__h1}>
                    Edite as informações
                  </h1>
                  <p className={style.login__text__aux}>
                    Altere a quantidade de alunos de determinada escola
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
                          placeholder={`${content.item.n1}`}/>

                        <button 
                          className={style.login__button__loading} onClick={(e) => {
                            e.preventDefault()
                          }}>
                          <span className="loader"></span>
                        </button>  
                      </>
                      :
                      <>
                        <input 
                          onChange={handleInput0} 
                          required 
                          type='text' 
                          value={input0} 
                          placeholder={`${content.item.n1}`}/>

                        <button onClick={handleEdit}>Editar</button>
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
  )
}

export default ModalUpdate