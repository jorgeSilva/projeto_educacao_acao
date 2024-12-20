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
    schools,
    setInput0,
    setInput1,
    setInput2,
  } = React.useContext(cadContext)

  React.useEffect(() => {
    setSelectUser(content.item._id)
    setType(content.type)
  }, [input0, input1, input2, input3, input4, input5, input6, input7, input8])

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
          content.type && content.type === 'escola'
          &&
          <section className={style.modal__content__form}>
            <main className={style.login__body}>
              <section className={style.login__content}>
                 <div className={style.login__rigth__side}>
                  <h1 className={style.login__rigth__side__h1}>
                    Edite as informações
                  </h1>
                  <p className={style.login__text__aux}>
                    Altere as informações relacionadas a escola
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
                          placeholder={`${content.item.modalidade}`}/>

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
                          value={input0 ? input0 : content.item.nome} 
                          placeholder={`${content.item.nome}`}/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1 ? input1 : content.item.modalidade} 
                          placeholder={`${content.item.modalidade}`}/>

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
                          value={input0 ? input0 : content.item.nome} 
                          placeholder={`${content.item.nome}`}/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1 ? input1 : content.item.setor} 
                          placeholder={`${content.item.setor}`}/>

                        <input
                          onChange={handleInput2}
                          type='text' 
                          value={input2 ? input2 : content.item.obs} 
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
                          value={input0 ? input0 : content.item.nome} 
                          placeholder={`${content.item.nome}`}/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1 ? input1 : content.item.setor}
                          placeholder={`${content.item.setor}`}/>

                        <input
                          onChange={handleInput2}
                          type='text' 
                          value={input2 ? input2 : content.item.obs} 
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
                          value={input0 ? input0 : content.item.nome} 
                          placeholder={`${content.item.nome}`}/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1 ? input1 : content.item.funcao} 
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
                          value={input0 ? input0 : content.item.nome} 
                          placeholder={`${content.item.nome}`}/>

                        <input 
                          onChange={handleInput1}
                          type='text' 
                          value={input1 ? input1 : content.item.funcao} 
                          placeholder={`${content.item.funcao}`}/>
                        
                        <input 
                          onChange={handleInput2}
                          type='text' 
                          value={input2 ? input2 : content.item.cargo} 
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

        ||

        (
          content.type && content.type === 'pre'
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
                          placeholder={`${content.item.nTurmas}`}/>

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
          content.type && content.type === 'creche'
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
                          placeholder={`${content.item.nTurmas}`}/>

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
          content.type && content.type === 'educacao-jovem-adulto'
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
                          placeholder={`${content.item.nTurmas}`}/>

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
          content.type && content.type === 'aee'
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
                          placeholder={`${content.item.nTurmas}`}/>

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
          content.type && content.type === 'aluno'
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
                          placeholder={`${content.item.nome}`}/>

                        <input 
                          onChange={handleInput1}
                          type='date' 
                          value={input1} 
                          placeholder={`${content.item.date}`}/>

                        <input 
                          onChange={handleInput2}
                          type='text' 
                          value={input2} 
                          placeholder={`${content.item.nomeMae}`}/>
                          
                        <input 
                          onChange={handleInput3}
                          type='text' 
                          value={input3} 
                          placeholder={`${content.item.nomePai}`}/>
                        
                        <input 
                          onChange={handleInput4}
                          type='text' 
                          value={input4} 
                          placeholder={`${content.item.rua}`}/>
                        
                        <input 
                          onChange={handleInput5}
                          type='text' 
                          value={input5} 
                          placeholder={`${content.item.bairro}`}/>

                        <input 
                          onChange={handleInput6}
                          type='text' 
                          value={input6} 
                          placeholder={`${content.item.nCasa}`}/>

                        <input 
                          onChange={handleInput7}
                          type='text' 
                          value={input7} 
                          placeholder={`${content.item.contato}`}/>

                        <input 
                          onChange={handleInput8}
                          type='text' 
                          value={input8} 
                          placeholder={`${content.item.periodo}`}/>
                        
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

                        <button onClick={handleEdit}>
                          Enviar
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
  )
}

export default ModalUpdate