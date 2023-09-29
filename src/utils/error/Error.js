import React from 'react'
import style from './Error.module.css'

const Error = ({content}) => {
  return (
    <div className={style.error__content}>
      <p className={style.error__text}>
        *{content}*
      </p>
    </div>
  )
}

export default Error