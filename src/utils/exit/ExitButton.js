import React from 'react'
import style from './ExitButton.module.css'
import { ReactComponent as IconExit } from '../../assets/Home/door-open-fill.svg'

const ExitButton = ({content}) => {
  const [btnExit, setBtnExit] = React.useState('')

  return (
    <div className={style.exit__button__content}>
      <button onClick={content} className={style.exit__button}>
        <IconExit/>
      </button>
    </div>
  )
}

export default ExitButton