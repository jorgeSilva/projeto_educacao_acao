import React from 'react'
import { buttonContext } from '../../context/buttonShowContext'

const ButtonsOptions = ({content}) => {

  const [compare, setCompare] = React.useState('')

  const {
    handleGet
  } = React.useContext(buttonContext)

  return (
    content && content.map((item) => (
      <>
        {
          compare === item.text ?
            <button 
              onClick={(e) => {
                setCompare(e.target.innerText)
                handleGet(item.url)
              }}
              className='rigth__side__option__active'
            >
            {
              item.text
            }
            </button>
          :
          <button 
          onClick={(e) => {
            setCompare(e.target.innerText)
            handleGet(item.url)
          }}
          className='rigth__side__option'
          >
          {
            item.text
          }
          </button>
        }
      </>
    ))
  )
}

export default ButtonsOptions