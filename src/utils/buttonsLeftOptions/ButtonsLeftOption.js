import React from 'react'
import { buttonLetContext } from '../../context/buttonsLeftShowContext'

const ButtonsLeftOption = ({content}) => {
  const [compare, setCompare] = React.useState('')

  const {
    setType,
    handleGet
  } = React.useContext(buttonLetContext)

  return (
    content && content.map((item) => (
      <>
        {
          compare === item.text ?
            <button 
              onClick={(e) => {
                setCompare(e.target.innerText)
                setType(e.target.innerText)
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
            setType(e.target.innerText)
            handleGet(item.url, item.select)
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

export default ButtonsLeftOption