import React from 'react'
import Horario from '../../utils/horario/Horario'
import Cadastro from '../../utils/cadastro/Cadastro'

const Setor = () => {
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
      <div className='rigth__side__container'>
        Funcionáros
      </div>
    </article>
  )
}

export default Setor