import React from 'react'
import style from './Cadastro.module.css'
import { ReactComponent as IconCadFunSetor } from '../../assets/Home/adicionarFuncionario.svg'
import { ReactComponent as IconCadValConv } from '../../assets/Home/adicionarConvenio.svg'
import { ReactComponent as IconCadServ } from '../../assets/Home/adicionarServidores.svg'
import { ReactComponent as IconCadProf } from '../../assets/Home/adicionarProfessores.svg'
import { ReactComponent as IconCadEscola } from '../../assets/Home/adicionarEscola.svg'
import { ReactComponent as IconCadModalidade } from '../../assets/Home/adicionarModalidade.svg'
import Modal from '../modal/Modal'

const Cadastro = ({content}) => {
  const [modal, setModal] = React.useState('')

  const handleClick = (e) => {
    setModal(e.target.innerText)
  }

  return (
    <section className={style.cadastro__container}>
      <h2 className={style.cadastro__title}>Cadastro</h2>
      <div className={style.cadastro__home}>
        {
          content && content.map((item) => (
            <>
              {
                item.type === 'Setor' 
                &&
                <button className={style.cadastro__content} onClick={handleClick}>
                  <div>
                    {
                      item.text === 'Adicionar funcionarios de determinado setor' ?
                      <IconCadFunSetor/>
                      :
                      <IconCadValConv/>
                    }
                    <p>{item.text}</p>
                  </div>
                </button>
              }

              {
                item.type === 'Servidores' 
                &&
                <button className={style.cadastro__content} onClick={handleClick}>
                  <div>
                    {
                      item.text === 'Adicionar servidores de determinada area' ?
                      <IconCadServ/>
                      :
                      <IconCadProf/>
                    }
                    <p>{item.text}</p>
                  </div>
                </button>
              }

              {
                item.type === 'Escola' 
                &&
                <button className={style.cadastro__content} onClick={handleClick}> 
                  <div className={style.cadastro__a}>
                    <>
                      {
                        item.text === 'Adicionar os alunos de determinada escola' && 
                        <>
                          <IconCadServ/>
                          <p>{item.text}</p>
                        </>
                      }
                    </>

                    <>
                      {
                        item.text === 'Adicionar as escolas' && 
                        <>
                          <IconCadEscola/>
                          <p>{item.text}</p>
                        </>
                      }
                    </>
                  </div>
                  
                  <div>
                    <>
                      {
                        item.text === 'Adicionar modalidade AEE' && 
                        <>
                          <IconCadModalidade/>
                          <p>{item.text}</p>
                        </>
                      }
                    </>

                    <>
                      {
                        item.text === 'Adicionar modalidade EJA' && 
                        <>
                          <IconCadModalidade/>
                          <p>{item.text}</p>
                        </>
                      }
                    </>
                  </div>

                  <div>
                    {
                      item.text === 'Adicionar modalidade EI' && 
                      <> 
                        <IconCadModalidade/>
                        <p>{item.text}</p>
                      </>
                    }
                  </div>

                  <div>
                    {
                      item.text === 'Adicionar escolas do tipo PRE' && 
                      <> 
                        <IconCadModalidade/>
                        <p>{item.text}</p>
                      </>
                    }
                  </div>

                  <div>
                    {
                      item.text === 'Adicionar escolas do tipo CRECHE' && 
                      <> 
                        <IconCadModalidade/>
                        <p>{item.text}</p>
                      </>
                    }
                  </div>
                
                </button>
              }
            </>
          ))
        }
      </div>

      {
        (
          modal && modal === 'Adicionar funcionarios de determinado setor'
          &&
          <>
            <Modal content={
              {
                type: 'setor',
                setModal
              }
            }/>
          </> 
        )
        ||
        (
          modal && modal === 'Adicionar os valores do convenio'
          &&
          <>
            <Modal content={
              {
                type: 'convenio',
                setModal
              }
            }/>
          </> 
        )
        ||
        (
          modal && modal === 'Adicionar servidores de determinada area'
          &&
          <>
            <Modal content={
              {
                type: 'servidor',
                setModal
              }
            }/>
          </> 
        )    
        ||
        (
          modal && modal === 'Adicionar os professores'
          &&
          <>
            <Modal content={
              {
                type: 'professor',
                setModal
              }
            }/>
          </> 
        )    
        ||
        (
          modal && modal === 'Adicionar os alunos de determinada escola'
          &&
          <>
            <Modal content={
              {
                type: 'aluno',
                setModal
              }
            }/>
          </> 
        )     
        ||
        (
          modal && modal === 'Adicionar as escolas'
          &&
          <>
            <Modal content={
              {
                type: 'escola',
                setModal
              }
            }/>
          </> 
        )   
        ||
        (
          modal && modal === 'Adicionar modalidade AEE'
          &&
          <>
            <Modal content={
              {
                type: 'aee',
                setModal
              }
            }/>
          </> 
        )   
        ||
        (
          modal && modal === 'Adicionar modalidade EJA'
          &&
          <>
            <Modal content={
              {
                type: 'educacao-jovem-adulto',
                setModal
              }
            }/>
          </> 
        )   
        ||
        (
          modal && modal === 'Adicionar modalidade EI'
          &&
          <>
            <Modal content={
              {
                type: 'educacao-infantil',
                setModal
              }
            }/>
          </> 
        )
        ||
        (
          modal && modal === 'Adicionar escolas do tipo PRE'
          &&
          <>
            <Modal content={
              {
                type: 'pre',
                setModal
              }
            }/>
          </> 
        )
        ||
        (
          modal && modal === 'Adicionar escolas do tipo CRECHE'
          &&
          <>
            <Modal content={
              {
                type: 'creche',
                setModal
              }
            }/>
          </> 
        )
      }
    </section>
  )
}

export default Cadastro