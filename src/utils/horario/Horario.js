import React from 'react'
import style from './Horario.module.css'

const Horario = () => {
  const [hours, setHours] = React.useState()

  React.useEffect(() => {
    const horas = new Date()
    setHours(horas.getHours())
  })

  return (
    <div className={style.horario__content}>
      {
        ( hours && hours < 12 &&
          <h1 className={style.horario}>
            Bom dia
          </h1>)
        ||
        ( hours >= 12 && hours < 18 &&
          <h1 className={style.horario}>
            Boa tarde
          </h1>)
        ||
        (hours >= 18 && hours <= 23 &&
          <h1 className={style.horario}>
            Boa noite
          </h1>)
      }
      <p className={style.horario__text}>Tome conta dos registros aqui coletados</p>
    </div>
  )
}

export default Horario