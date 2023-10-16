import React from 'react'
import Horario from '../../utils/horario/Horario'
import Cadastro from '../../utils/cadastro/Cadastro'
import ButtonsOptions from '../../utils/buttonsOptions/ButtonsOptions'
import { buttonContext } from '../../context/buttonShowContext'
import { ReactComponent as IconEdit } from '../../assets/Home/canetaEdicao.svg'
import { ReactComponent as IconTrash } from '../../assets/Home/trash3-fill.svg'
import ButtonsLeftOption from '../../utils/buttonsLeftOptions/ButtonsLeftOption'
import Chart from '../../utils/grafico/ApexChart'
import { buttonLetContext } from '../../context/buttonsLeftShowContext'
import ModalUpdate from '../../utils/modalUpdate/ModalUpdate'
import ModalDelete from '../../utils/modalDelete/ModalDelete'

const Setor = () => {
  const {
    dataLeft,
    date,
    valuePMI,
    valueSEE
  } = React.useContext(buttonLetContext)

  const {
    data,
    type,
    loading
  } = React.useContext(buttonContext)

  const [active, setActive] = React.useState(false)
  const [stop, setStop] = React.useState('')

  return (
    <article className='container'>
      <section className='left__side__container'>
        <Horario/>
        <Cadastro content={
          [
            {
              text: 'Adicionar funcionarios de determinado setor',
              type: 'Setor'
            },
            {
              text: 'Adicionar os valores do convenio',
              type: 'Setor'
            }
          ]
        }/>

        <section className='left__side__container__show'>
          <h2 className='rigth__side__title'>Convênio</h2>
          <section className='left__side__content'>
            <ButtonsLeftOption content={[
              {
                text: 'Merenda',
                url: 'convenio/merenda/show',
                select: 'convenio'
              },
              {
                text: 'Transporte',
                url: 'convenio/transporte/show',
                select: 'convenio'
              }
            ]}/>
          </section>
          
          <div className='left__side__show__convenio'>
            {
              dataLeft ? 
              <Chart date={date} valuePMI={valuePMI} valueSEE={valueSEE}/>
              :
              <p style={{textAlign:'center'}}>Selecione um campo para exibir o grafico</p>
            }
          </div>
        </section>
      </section>
      <article className='rigth__side__container'>
        <h2 className='rigth__side__title'>Funcionários e Convênio</h2>

        <section className='rigth__side__content'>
          <ButtonsOptions content={[
            {
              text: 'Esporte',
              url: 'setor/esporte/show'
            },
            {
              text: 'Educação',
              url: 'setor/educacao/show'
            },
            {
              text: 'Univesp',
              url: 'setor/univesp/show'
            },
            {
              text: 'Cultura',
              url: 'setor/cultura/show'
            },
            {
              text: 'ADM',
              url: 'setor/adm/show'
            },
            {
              text: 'CMAEE',
              url: 'setor/cmaee/show'
            },
            {
              text: 'Transporte Coletivo',
              url: 'setor/transporte/show'
            },
            {
              text: 'Merenda',
              url: 'convenio/merenda/show'
            },
            {
              text: 'Transporte',
              url: 'convenio/transporte/show'
            }
          ]}/>
        </section>
        
        <section className='rigth__side__show'>
          {
            type === 'Merenda'
            ?
            <>
              {
                data ? data.map((item) => (
                  <>
                    <section className='rigth__side__card' key={item._id}>
                      {
                        active && stop === item._id ?
                        <>
                          {
                            active === 'update'?
                            <ModalUpdate content={{item, type:'convenio', setActive}}/>
                            :
                            <ModalDelete content={{item, type:'convenio', setActive, h1: 'Exclua o registro do determinado convênio', name: 'Merenda'}}/>
                          }
                        </>
                        :
                        <>
                          {
                            loading ?
                            <span className="loader-"></span>
                            :
                            <>
                              <div className='rigth__content__card__edit'>
                                <p className='card__text'>
                                  <span>Convênio:</span> {item.convenio}
                                </p>
                                <div>
                                  <button className='card__button__edit' onClick={() => {
                                    setActive('update')
                                    setStop(item._id)
                                  }}>
                                    <IconEdit/>
                                  </button>
                                  <button className='card__button__edit' onClick={() => {
                                    setActive('delete')
                                    setStop(item._id)
                                  }}>
                                    <IconTrash/>
                                  </button>
                                </div>
                              </div>
                              <p className='card__text'>
                                <span>PMI:</span> {item.pmi}
                              </p>
                              <p className='card__text'>
                                <span>SEE:</span> {item.see}
                              </p>
                              <p className='card__text'>
                                <span>Contrapartida:</span> {item.contraPartida}
                              </p>
                              <p className='card__text'>
                                <span>Data:</span> {item.date}
                              </p>
                            </>
                          }
                        </>
                      }
                    </section>
                  </>
                )) 
                :
                <p className='rigth__side__text__report'>Ainda não tem cadastros</p>
              }
            </>
            :
            <>
              {
                data ? data.map((item) => (
                  <>
                    <section className='rigth__side__card' key={item._id}>
                      {
                        active && stop === item._id ? 
                        <>
                        {
                          active === 'update'?
                          <ModalUpdate content={{item, type:'setor', setActive}}/>
                          :
                          <ModalDelete content={{item, type:'setor', setActive, h1: 'Exclua o registro do determinado funcionário', name: 'Funcionário'}}/>
                        }
                      </>
                      :
                      <>
                        {
                          loading ?
                          <span className="loader-"></span>
                          :
                          <>
                            <div className='rigth__content__card__edit'>
                              <p className='card__text'>
                                <span>Nome:</span> {item.nome}
                              </p>
                              <div>
                                <button className='card__button__edit' onClick={() => {
                                  setActive('update')
                                  setStop(item._id)
                                }}>
                                  <IconEdit/>
                                </button>
                                <button className='card__button__edit' onClick={() => {
                                  setActive('delete')
                                  setStop(item._id)
                                }}>
                                  <IconTrash/>
                                </button>
                              </div>
                            </div>
                            <p className='card__text'>
                              <span>Setor:</span> {item.setor}
                            </p>
                            <p className='card__text'>
                              <span>Obs:</span> {item.obs}
                            </p>
                          </>
                        }
                      </>
                    }
                    </section>
                  </>
                )) 
                :
                <p className='rigth__side__text__report'>Ainda não tem cadastros</p>
              }
            </>
          }
        </section>
      </article>
    </article>
  )
}

export default Setor