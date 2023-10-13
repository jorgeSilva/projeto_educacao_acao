import React from 'react'
import style from './ModalDelete.module.css'
import { ReactComponent as IconExit } from '../../assets/Home/x-circle-fill.svg'
import api from '../../services/api'
import Success from '../msgSuccess/Success'

const ModalDelete = ({content}) => {

  const [loading, setLoading] = React.useState('')
  const [success, setSuccess] = React.useState('')

  async function handleClick(e){
    e.preventDefault()

    setLoading(true)
    await api.delete(`${content.type}/delete/${content.item._id}`)
    .then(({data}) => {
      console.log(data);
      setSuccess(data.msg)
      setLoading(false)
    }).catch(e => {
      console.log(e);
      setLoading(false)
    })
  }

  return (
    <article className={style.modal__container}>
    <section className={style.modal__content__button}>
      <button onClick={() => {
        content.setActive('')
      }} className={style.modal__button__close}>
        <IconExit/>
      </button>
    </section>
    
    <section className={style.modal__content__form}>
      <main className={style.login__body}>
        <section className={style.login__content}>
          <div className={style.login__rigth__side}>
            <h1 className={style.login__rigth__side__h1}>
              Deletar {content.name}
            </h1>
            <p className={style.login__text__aux}>
              {String(content.h1)} 
            </p>

            <form className={style.login__form}>
              <button onClick={handleClick}>
                Deletar
              </button>
            </form>
          </div>
        </section> 
      </main>
    </section>
    {
      success && <Success content={success}/>
    }
  </article>
  )
}

export default ModalDelete