import React from 'react'
import style from './Search.module.css'
import { ReactComponent as IconSearch } from '../../assets/Home/search.svg'
import { ReactComponent as IconExit } from '../../assets/Home/x-circle-fill.svg'

const Search = () => {
  const [active, setActive] = React.useState(false)
  
  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div className={style.search__content}>
      {
        active && <input/>
      }
      <button onClick={handleClick}>
        {
          active ? 
          <div className={style.search__active}>
            <IconExit/> 
          </div>
            : 
          <div className={style.search}>
            <IconSearch/>
          </div>
        }
      </button>
    </div>
  )
}

export default Search