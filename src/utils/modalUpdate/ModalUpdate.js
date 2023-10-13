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
    setSuccess,
    setError,
    selected,
    schools
  } = React.useContext(cadContext)

  React.useEffect(() => {
    setSelected(content.item._id)
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
      }
      {
        success && <Success content={success}/>
      }
    </article>
  )
}

export default ModalUpdate