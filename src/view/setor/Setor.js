import React from 'react'
import Horario from '../../utils/horario/Horario'
import Cadastro from '../../utils/cadastro/Cadastro'
// import api from '../../services/api'
import ButtonsOptions from '../../utils/buttonsOptions/ButtonsOptions'
import { buttonContext } from '../../context/buttonShowContext'
import { ReactComponent as IconEdit } from '../../assets/Home/canetaEdicao.svg'
import { ReactComponent as IconTrash } from '../../assets/Home/trash3-fill.svg'

const Setor = () => {

  const {
    data
  } = React.useContext(buttonContext)

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
      </section>
      <article className='rigth__side__container'>
        <h2 className='rigth__side__title'>Funcionáros</h2>

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
          ]}/>
        </section>

        <section className='rigth__side__show'>
          {
            data ? data.map((item) => (
              <section className='rigth__side__card' key={item._id}>
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
                  <span>Setor:</span> {item.setor}
                </p>
                <p className='card__text'>
                  <span>Obs:</span> {item.obs}
                </p>
              </section>
            )) 
            :
            <p className='rigth__side__text__report'>Ainda não tem cadastros</p>
          }
        </section>
      </article>
    </article>
  )
}

export default Setor