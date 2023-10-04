import React from 'react'
import Horario from '../../utils/horario/Horario'
import Cadastro from '../../utils/cadastro/Cadastro'

const Servidores = () => {
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
    </section>
    <div className='rigth__side__container'>
      Professores
    </div>
  </article>
  )
}

export default Servidores