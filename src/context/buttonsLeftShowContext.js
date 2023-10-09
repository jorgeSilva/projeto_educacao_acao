import React from "react";
import api from "../services/api";

const buttonLetContext = React.createContext()

function ButtonLeftShowProvider({children}){
  const [dataLeft, setDataLeft] = React.useState('')
  const [url, setUrl] = React.useState('')
  const [loadingLeft, setLoadingLeft] = React.useState('')
  const [escolaLeft, setEscolaLeft] = React.useState('')
  const [type, setType] = React.useState('')

  async function handleGet(e, select){
    if(select === 'escola'){
      setLoadingLeft(true)
      await api.get(`/${String(e)}`)
      .then(({data}) => {
        setEscolaLeft(data)
        setLoadingLeft(false)
      }).catch(e => {
        // console.log(e)
        setLoadingLeft(false)
      })
    }else if(select === 'servidor'){
      await api.get(`/${String(e)}`)
      .then(({data}) => {
        setDataLeft('')
        setDataLeft(data)
        setLoadingLeft(false)
      }).catch(e => {
        // console.log(e)
        setLoadingLeft(false)
      })
    }
  }
  

  return(
    <buttonLetContext.Provider value={
      { 
        setType,
        setUrl,
        setEscolaLeft,
        setDataLeft,
        handleGet,
        type,
        loadingLeft,
        escolaLeft,
        dataLeft
      }
    }>
      {children}
    </buttonLetContext.Provider>
  )
}

export {buttonLetContext, ButtonLeftShowProvider}