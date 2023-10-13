import React from "react";
import api from "../services/api";

const buttonContext = React.createContext()

function ButtonShowProvider({children}){
  const [data, setData] = React.useState('')
  const [url, setUrl] = React.useState('')
  const [urlPadrao, setUrlPadrao] = React.useState('')
  const [loading, setLoading] = React.useState('')
  const [escola, setEscola] = React.useState('')
  const [type, setType] = React.useState('')

  async function handleGet(e){
    if(e){
      setLoading(true)
      await api.get(`${e}`)
      .then(({data}) => {
        setData('')
        setEscola('')
        setData(data)
        setEscola(data)
        setLoading(false)
      }).catch(e => {
        setLoading(false)
      })
    }
  }

  async function handlePadrao(){
    setLoading(true)
    await api.get(`/${urlPadrao.toLocaleLowerCase()}/show`)
    .then(({data}) => {
      setData('')
      setEscola('')
      setData(data)
      if(data[0].fkescola){
        setEscola(data);
      }
      setLoading(false)
    }).catch(e => {
      setLoading(false)
    })
  }

  React.useEffect(() => {
    handlePadrao()
  }, [urlPadrao])

  return(
    <buttonContext.Provider value={
      { 
        setType,
        setUrl,
        setUrlPadrao,
        handleGet,
        handlePadrao,
        type,
        loading,
        escola,
        data
      }
    }>
      {children}
    </buttonContext.Provider>
  )
}

export {buttonContext, ButtonShowProvider}