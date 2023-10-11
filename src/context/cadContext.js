import React from "react";
import api from "../services/api";

const cadContext = React.createContext()

function CadProvider({children}){
  const [input0, setInput0] = React.useState('')
  const [input1, setInput1] = React.useState('')
  const [input2, setInput2] = React.useState('')
  const [input3, setInput3] = React.useState('')
  const [input4, setInput4] = React.useState('')
  const [input5, setInput5] = React.useState('')
  const [input6, setInput6] = React.useState('')
  const [input7, setInput7] = React.useState('')
  const [input8, setInput8] = React.useState('')
  const [input9, setInput9] = React.useState('')
  const [error, setError] = React.useState('')
  const [success, setSuccess] = React.useState('')
  const [loading, setLoading] = React.useState('')
  const [type, setType] = React.useState('')
  const [selected, setSelected] = React.useState('')

  const handleInput0 = (e) =>{
    setInput0(e.target.value)
  }

  const handleInput1 = (e) =>{
    setInput1(e.target.value)
  }

  const handleInput2 = (e) =>{
    setInput2(e.target.value)
  }

  const handleInput3 = (e) =>{
    setInput3(e.target.value)
  }

  const handleInput4 = (e) =>{
    setInput4(e.target.value)
  }

  const handleInput5 = (e) =>{
    setInput5(e.target.value)
  }

  const handleInput6 = (e) =>{
    setInput6(e.target.value)
  }

  const handleInput7 = (e) =>{
    setInput7(e.target.value)
  }

  const handleInput8 = (e) =>{
    setInput8(e.target.value)
  }

  const handleInput9 = (e) =>{
    setInput9(e.target.value)
  }

  const [schools, setSchools] = React.useState('')

  async function schoolsGet(){
    await api.get('escola/show').then(({data}) => setSchools(data)).catch(e => console.log(e))
  }

  const handleSelectSchool = (e) =>{
    const s = schools.find((x) => x._id === e.target.value)
    setSelected(String(s._id));
  }

  console.log(selected);

  async function handleSubmit(e){
    e.preventDefault()

    if(type === 'setor'){
      setLoading(true)
      await api.post(`${type}`, {
        nome: input0,
        setor: input1,
        obs: input2
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
      }).catch(e => {
        setError(e.response.data.error);
        setLoading(false)
      }).finally(() => {
        setInput0('')
        setInput1('')
        setInput2('')
        setInput3('')
        setInput4('')
        setInput5('')
        setInput6('')
        setInput7('')
        setInput8('')
        setInput9('')
        setSelected('')
      })
    }else if(type === 'convenio'){
      setLoading(true)
      await api.post(`${type}`, {
        convenio: input0,
        pmi: input1,
        see: input2,
        contraPartida: input3,
        date: input4
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
      }).catch(e => {
        setError(e.response.data.error);
        setLoading(false)
      }).finally(() => {
        setInput0('')
        setInput1('')
        setInput2('')
        setInput3('')
        setInput4('')
        setInput5('')
        setInput6('')
        setInput7('')
        setInput8('')
        setInput9('')
        setSelected('')
      })
    }else if(type === 'servidor'){
      setLoading(true)
      await api.post(`/${type}`, {
        nome: input0,
        funcao: input1,
        cargo: input2,
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
      }).catch(e => {
        setError(e.response.data.error);
        console.log(selected);
        setLoading(false)
      }).finally(() => {
        setInput0('')
        setInput1('')
        setInput2('')
        setInput3('')
        setInput4('')
        setInput5('')
        setInput6('')
        setInput7('')
        setInput8('')
        setInput9('')
        setSelected('')
      })
    }else if(type === 'professor'){
      setLoading(true)
      await api.post(`${type}`, {
        nome: input0,
        funcao: input1,
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
      }).catch(e => {
        setError(e.response.data.error);
        setLoading(false)
      }).finally(() => {
        setInput0('')
        setInput1('')
        setInput2('')
        setInput3('')
        setInput4('')
        setInput5('')
        setInput6('')
        setInput7('')
        setInput8('')
        setInput9('')
        setSelected('')
      })
    }else if(type === 'aluno'){
      setLoading(true)
      await api.post(`${type}`, {
        nome: input0,
        dataNasc: input1,
        nomeMae: input2,
        nomePai: input3,
        rua: input4,
        bairro: input5,
        nCasa: input6,
        contato: input7,
        periodo: input8,
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
      }).catch(e => {
        setError(e.response.data.error);
        setLoading(false)
      }).finally(() => {
        setInput0('')
        setInput1('')
        setInput2('')
        setInput3('')
        setInput4('')
        setInput5('')
        setInput6('')
        setInput7('')
        setInput8('')
        setInput9('')
        setSelected('')
      })
    }else if(type === 'escola'){
      setLoading(true)
      await api.post(`${type}`, {
        nome: input0,
        modalidade: input1,
        n1: input2,
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
      }).catch(e => {
        setError(e.response.data.error);
        setLoading(false)
      }).finally(() => {
        setInput0('')
        setInput1('')
        setInput2('')
        setInput3('')
        setInput4('')
        setInput5('')
        setInput6('')
        setInput7('')
        setInput8('')
        setInput9('')
        setSelected('')
      })
    }else if(type === 'aee'){
      setLoading(true)
      await api.post(`${type}`, {
        nTurmas: input0,
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
      }).catch(e => {
        setError(e.response.data.error);
        setLoading(false)
      }).finally(() => {
        setInput0('')
        setInput1('')
        setInput2('')
        setInput3('')
        setInput4('')
        setInput5('')
        setInput6('')
        setInput7('')
        setInput8('')
        setInput9('')
        setSelected('')
      })
    }else if(type === 'educacao-jovem-adulto'){
      setLoading(true)
      await api.post(`${type}`, {
        nTurmas: input0,
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
      }).catch(e => {
        setError(e.response.data.error);
        setLoading(false)
      }).finally(() => {
        setInput0('')
        setInput1('')
        setInput2('')
        setInput3('')
        setInput4('')
        setInput5('')
        setInput6('')
        setInput7('')
        setInput8('')
        setInput9('')
        setSelected('')
      })
    }else if(type === 'educacao-infantil'){
      setLoading(true)
      await api.post(`${type}`, {
        nTurmas: input0,
        parcial: input1,
        integral: input2,
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
      }).catch(e => {
        setError(e.response.data.error);
        setLoading(false)
      }).finally(() => {
        setInput0('')
        setInput1('')
        setInput2('')
        setInput3('')
        setInput4('')
        setInput5('')
        setInput6('')
        setInput7('')
        setInput8('')
        setInput9('')
        setSelected('')
      })
    }else if(type === 'pre'){
      setLoading(true)
      await api.post(`${type}`, {
        nTurmas: input0,
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
      }).catch(e => {
        setError(e.response.data.error);
        setLoading(false)
      }).finally(() => {
        setInput0('')
        setInput1('')
        setInput2('')
        setInput3('')
        setInput4('')
        setInput5('')
        setInput6('')
        setInput7('')
        setInput8('')
        setInput9('')
        setSelected('')
      })
    }else if(type === 'creche'){
      setLoading(true)
      await api.post(`${type}`, {
        nTurmas: input0,
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
      }).catch(e => {
        setError(e.response.data.error);
        setLoading(false)
      }).finally(() => {
        setInput0('')
        setInput1('')
        setInput2('')
        setInput3('')
        setInput4('')
        setInput5('')
        setInput6('')
        setInput7('')
        setInput8('')
        setInput9('')
        setSelected('')
      })
    }
  }

  React.useEffect(() => {
    schoolsGet()
  }, [])

  return(
    <cadContext.Provider 
      value={{
        handleInput0, 
        handleInput1, 
        handleInput2, 
        handleInput3, 
        handleInput4, 
        handleInput5, 
        handleInput6, 
        handleInput7, 
        handleInput8, 
        handleInput9,
        handleSelectSchool,
        input0, 
        input1, 
        input2, 
        input3, 
        input4, 
        input5, 
        input6, 
        input7, 
        input8, 
        input9, 
        success, 
        error,
        loading, 
        handleSubmit, 
        setType,
        setSuccess,
        setError,
        setInput0,
        setInput1,
        setInput2,
        setInput3,
        setInput4,
        setInput5,
        setInput6,
        setInput7,
        setInput8,
        setInput9,
        setSelected,
        selected,
        schools
      }}>
      {children}
    </cadContext.Provider>
  )
}

export {cadContext, CadProvider}