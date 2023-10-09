import React from 'react'
import Horario from '../../utils/horario/Horario'
import Cadastro from '../../utils/cadastro/Cadastro'
import ButtonsOptions from '../../utils/buttonsOptions/ButtonsOptions'
import { buttonContext } from '../../context/buttonShowContext'
import { ReactComponent as IconEdit } from '../../assets/Home/canetaEdicao.svg'
import { ReactComponent as IconTrash } from '../../assets/Home/trash3-fill.svg'
import ButtonsLeftOption from '../../utils/buttonsLeftOptions/ButtonsLeftOption'
import { buttonLetContext } from '../../context/buttonsLeftShowContext'


const Servidores = () => {
  const {
    escola,
    data,
    loading
  } = React.useContext(buttonContext)

  const {
    escolaLeft,
    dataLeft,
    loadingLeft
  } = React.useContext(buttonLetContext)

  return (
    <article className='container'>
    <section className='left__side__container'>
      <Horario/>
      <Cadastro content={
        [
          {
            text: 'Adicionar servidores de determinada area',
            type: 'Servidores'
          }, 
          {
            text: 'Adicionar os professores',
            type: 'Servidores'
          }
        ]
      }/>
      
      <section className='left__side__container__show'>
        <h2 className='rigth__side__title'>Servidores</h2>

        <section className='left__side__content'>
          <ButtonsLeftOption content={[
            {
              text: 'Merendeira Efetiva',
              url: 'merendeiraEfetiva/show',
              select: 'servidor'
            },
            {
              text: 'Merendeira Contratada',
              url: 'merendeiraContratada/show',
              select: 'servidor'
            },
            {
              text: 'Aux. Limpeza contratada',
              url: 'auxLimpCont/show',
              select: 'servidor'
            },
            {
              text: 'Motorista Efetivo',
              url: 'motoristaEfetivo/show',
              select: 'servidor'
            },
            {
              text: 'Motorista Contratado',
              url: 'motoristaContratado/show',
              select: 'servidor'
            },
            {
              text: 'Cuidador',
              url: 'cuidador/show',
              select: 'servidor'
            },
            {
              text: 'Monitor',
              url: 'monitor/show',
              select: 'servidor'
            }
          ]}/>
        </section>
        <div className='left__side__show'>
          {
            dataLeft ?
            dataLeft.map((item) => (
              <section className='rigth__side__card' key={item._id}>
                {
                  loadingLeft ?
                  <span className="loader-"></span>
                  :
                  <>
                  <div className='rigth__content__card__edit'>
                    <p className='card__text'>
                      <span>Nome:</span> {item.nome}
                    </p>
                    <div>
                      <button className='card__button__edit'>
                        <IconEdit/>
                      </button>
                      <button className='card__button__edit'>
                        <IconTrash/>
                      </button>
                    </div>
                  </div>
                  <p className='card__text'>
                    <span>Função:</span> {item.funcao}
                  </p>
                  <p className='card__text'>
                    <span>Cargo:</span> {item.cargo}
                  </p>
                  <p className='card__text'>
                    <span>Escola:</span> {item.fkescola.nome}
                  </p>  
                  </>
                }
              </section>
            )) 
            :
            <p style={{textAlign:'center'}}>Selecione uma opção</p>
          }
        </div>
      </section>
    </section>

    <div className='rigth__side__container'>
      <h2 className='rigth__side__title'>Professores</h2>

      <section className='rigth__side__content'>
        <ButtonsOptions content={[
          {
            text: '40h',
            url: 'professor/40h/show'
          },
          {
            text: 'REA 40h',
            url: 'professor/rea40h/show'
          },
          {
            text: 'AF 40h',
            url: 'professor/af40h/show'
          },
          {
            text: '25h',
            url: 'professor/25h/show'
          },
          {
            text: 'REA 25',
            url: 'professor/rea25h/show'
          },
          {
            text: 'AF 25h',
            url: 'professor/af25h/show'
          },
          {
            text: 'Professor Contratado',
            url: 'professor/professorContratado/show'
          },
        ]}/>

      </section>

      <section className='rigth__side__show'>
        {
          escola && escola.map((item) => (
            <section className='rigth__side__card' key={item._id}>
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
                    <button className='card__button__edit'>
                      <IconEdit/>
                    </button>
                    <button className='card__button__edit'>
                      <IconTrash/>
                    </button>
                  </div>
                </div>
                <p className='card__text'>
                  <span>Função:</span> {item.funcao}
                </p>
                <p className='card__text'>
                  <span>Escola:</span> {item.fkescola.nome}
                </p>  
                </>
              }
            </section>
          )) 
        }
      </section>
    </div>
  </article>
  )
}

export default Servidores