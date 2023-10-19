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
  const [selectUser, setSelectUser] = React.useState('')

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

  async function handleSubmit(e){
    e.preventDefault()

    if(type === 'setor'){
      setLoading(true)
      await api.post(`${type}`, {
        nome: String(input0).trim(),
        setor: String(input1).trim(),
        obs: String(input2).trim()
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
        setTimeout(window.location.reload(), 2000)
      })
    }else if(type === 'convenio'){
      setLoading(true)
      await api.post(`${type}`, {
        convenio: String(input0).trim(),
        pmi: String(input1).trim(),
        see: String(input2).trim(),
        contraPartida: String(input3).trim(),
        date: String(input4).trim()
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
        setTimeout(window.location.reload(), 2000)
      })
    }else if(type === 'servidor'){
      setLoading(true)
      await api.post(`/${type}`, {
        nome: String(input0).trim(),
        funcao: String(input1).trim(),
        cargo: String(input2).trim(),
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
        setTimeout(window.location.reload(), 2000)
      })
    }else if(type === 'professor'){
      setLoading(true)
      await api.post(`${type}`, {
        nome: String(input0).trim(),
        funcao: String(input1).trim(),
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
      }).catch(e => {
        setError(e.response.data.error);
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
        setTimeout(window.location.reload(), 2000)
      })
    }else if(type === 'aluno'){
      setLoading(true)
      await api.post(`${type}`, {
        nome: String(input0).trim(),
        dataNasc: String(input1).trim(),
        nomeMae: String(input2).trim(),
        nomePai: String(input3).trim(),
        rua: String(input4).trim(),
        bairro: String(input5).trim(),
        nCasa: String(input6).trim(),
        contato: String(input7).trim(),
        periodo: String(input8).trim(),
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
        setTimeout(window.location.reload(), 2000)
      })
    }else if(type === 'escola'){
      setLoading(true)
      await api.post(`${type}`, {
        nome: String(input0).trim(),
        modalidade: String(input1).trim(),
        n1: String(input2).trim(),
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
        setTimeout(window.location.reload(), 2000)
      })
    }else if(type === 'aee'){
      setLoading(true)
      await api.post(`${type}`, {
        nTurmas: String(input0).trim(),
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
        setTimeout(window.location.reload(), 2000)
      })
    }else if(type === 'educacao-jovem-adulto'){
      setLoading(true)
      await api.post(`${type}`, {
        nTurmas: String(input0).trim(),
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
        setTimeout(window.location.reload(), 2000)
      })
    }else if(type === 'educacao-infantil'){
      setLoading(true)
      await api.post(`${type}`, {
        nTurmas: String(input0).trim(),
        parcial: String(input1).trim(),
        integral: String(input2).trim(),
        alunos0a3: String(input3).trim(),
        alunos4: String(input4).trim(),
        alunos5: String(input5).trim(),
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
        setTimeout(window.location.reload(), 2000)
      })
    }else if(type === 'pre'){
      setLoading(true)
      await api.post(`${type}`, {
        nTurmas: String(input0).trim(),
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
        setTimeout(window.location.reload(), 2000)
      })
    }else if(type === 'creche'){
      setLoading(true)
      await api.post(`${type}`, {
        nTurmas: String(input0).trim(),
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
        setTimeout(window.location.reload(), 2000)
      })
    }
  }

  async function handleEdit(e){
    e.preventDefault()
    
    if(type === 'setor'){
      setLoading(true)
      await api.put(`${type}/dados/${selectUser}`, {
        nome: String(input0).trim(),
        setor: String(input1).trim(),
        obs: String(input2).trim()
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)

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
      await api.put(`${type}/update/${selectUser}`, {
        convenio: String(input0).trim(),
        pmi: String(input1).trim(),
        see: String(input2).trim(),
        contraPartida: String(input3).trim(),
        date: String(input4).trim()
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
    }else if(type === 'professores'){
      setLoading(true)
      await api.put(`${type}/update/${selectUser}`, {
        nome: String(input0).trim(),
        funcao: String(input1).trim(),
        fkescola: selected,
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
    }else if(type === 'servidores'){
      setLoading(true)
      await api.put(`${type}/update/${selectUser}`, {
        nome: String(input0).trim(),
        funcao: String(input1).trim(),
        cargo: String(input2).trim(),
        fkescola: selected,
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
    }else if(type === '0a3anos'){
      setLoading(true)
      await api.put(`${type}/update/${selectUser}`, {
        alunos0a3: String(input0).trim(),
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
    }else if(type === 'alunos4'){
      setLoading(true)
      await api.put(`${type}/update/${selectUser}`, {
        alunos4: String(input0).trim(),
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
    }else if(type === 'alunos5'){
      setLoading(true)
      await api.put(`${type}/update/${selectUser}`, {
        alunos5: String(input0).trim(),
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
      await api.put(`${type}/update/${selectUser}`, {
        nTurmas: String(input0).trim(),
        parcial: String(input1).trim(),
        integral: String(input2).trim(),
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
    }else if(type === 'escolaN1C'){
      setLoading(true)
      await api.put(`${type}/update/${selectUser}`, {
        n1: String(input0).trim(),
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
      await api.put(`${type}/update/${selectUser}`, {
        nTurmas: String(input0).trim(),
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)

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
      await api.put(`${type}/update/${selectUser}`, {
        nTurmas: String(input0).trim(),
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)

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
      await api.put(`${type}/update/${selectUser}`, {
        nTurmas: String(input0).trim(),
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)

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
      await api.put(`${type}/update/${selectUser}`, {
        nTurmas: String(input0).trim(),
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        setTimeout(window.location.reload(), 2000)
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
      await api.put(`${type}/update/${selectUser}`, {
        nome: String(input0).trim(),
        modalidade: String(input1).trim()
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        const time = setTimeout(window.location.reload(), 5000)
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
      await api.put(`${type}/update/${selectUser}`, {
        nome: String(input0).trim(),
        dataNasc: String(input1).trim(),
        nomeMae: String(input2).trim(),
        nomePai: String(input3).trim(),
        rua: String(input4).trim(),
        bairro: String(input5).trim(),
        nCasa: String(input6).trim(),
        contato: String(input7).trim(),
        periodo: String(input8).trim(),
        fkescola: selected
      }).then(({data}) => {
        setSuccess(data.msg)
        setLoading(false)
        const time = setTimeout(window.location.reload(), 5000)
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
        setSelectUser,
        handleSubmit,
        handleEdit, 
        setType,
        setLoading,
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