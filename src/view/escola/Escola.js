import React from 'react'
import Horario from '../../utils/horario/Horario'
import Cadastro from '../../utils/cadastro/Cadastro'

const Escola = () => {

  return (
    <article className='container'>
      <section className='left__side__container'>
        <Horario/>
        <Cadastro content={
          [
            {
              text: 'Adicionar os alunos de determinada escola',
              type: 'Escola'
            },
            {
              text: 'Adicionar as escolas',
              type: 'Escola'
            },
            {
              text: 'Adicionar modalidade AEE',
              type: 'Escola'
            },
            {
              text: 'Adicionar modalidade EJA',
              type: 'Escola'
            },
            {
              text: 'Adicionar modalidade EI',
              type: 'Escola'
            }
          ]
        }/>
      </section>
      <div className='rigth__side__container'>
        Modalidade Escolar
      </div>
    </article>
  )
}

export default Escola