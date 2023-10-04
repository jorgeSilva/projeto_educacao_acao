import React from 'react'
import style from './Success.module.css'

const Success = ({content}) => {
  return (
    <div className={style.success__container}>
      <div className={style.success__content}>
        <p className={style.success__text}>
          {content}
        </p>
      </div>
    </div>
  )
}

export default Success