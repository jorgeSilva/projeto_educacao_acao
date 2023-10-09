import React from 'react'
import Horario from '../../utils/horario/Horario'
import Cadastro from '../../utils/cadastro/Cadastro'
import ButtonsOptions from '../../utils/buttonsOptions/ButtonsOptions'
import { buttonContext } from '../../context/buttonShowContext'
import { ReactComponent as IconEdit } from '../../assets/Home/canetaEdicao.svg'
import { ReactComponent as IconTrash } from '../../assets/Home/trash3-fill.svg' 
import { buttonLetContext } from '../../context/buttonsLeftShowContext'
import ButtonsLeftOption from '../../utils/buttonsLeftOptions/ButtonsLeftOption'

const Escola = () => {
  const {
    escola,
    type,
    data,
    loading
  } = React.useContext(buttonContext)

  const {
    escolaLeft,
    loadingLeft
  } = React.useContext(buttonLetContext)

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
            },
            {
              text: 'Adicionar escolas do tipo PRE',
              type: 'Escola'
            },
            {
              text: 'Adicionar escolas do tipo CRECHE',
              type: 'Escola'
            }
          ]
        }/>
        <section className='left__side__container__show'>
        <h2 className='rigth__side__title'>Servidores</h2>

        <section className='left__side__content'>
          <ButtonsLeftOption content={[
            {
              text: 'EMEI',
              url: 'emei/show',
              select: 'escola'
            },
            {
              text: 'Vila Dom Silvio',
              url: 'vila/show',
              select: 'escola'
            },
            {
              text: 'Agrovila III',
              url: 'agro/show',
              select: 'escola'
            },
            {
              text: 'Toriba',
              url: 'toriba/show',
              select: 'escola'
            },
            {
              text: 'Favo de mel',
              url: 'favo/show',
              select: 'escola'
            },
            {
              text: 'EE Jardim Santa Inês',
              url: 'jardim/show',
              select: 'escola'
            }
          ]}/>
        </section>
        <div className='left__side__show'>
          {
            escolaLeft ?

            <section className='rigth__side__card'>
            {
              loadingLeft ?
              <span className="loader-"></span>
              :
              <>
              {
                escolaLeft.escola[0] && 
                <>
                  <div className='rigth__content__card__edit'>
                    <p className='card__text'>
                      <span>Nome:</span> {escolaLeft.escola[0].nome}
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
                    <span>Modalidade:</span> {escolaLeft.escola[0].modalidade}
                  </p>
                  <p className='card__text'>
                    <span>N + 1C:</span> {escolaLeft.escola[0].n1}
                  </p>
                  {
                    escolaLeft.aee[0] ?
                    <p className='card__text'>
                      <span>Turmas AEE:</span> {escolaLeft.aee[0].nTurmas}
                    </p>
                    :
                    <p className='card__text'>
                      <span>Turmas AEE:</span> Nenhuma
                    </p>
                  }
                  {
                    escolaLeft.eja[0] ?
                    <p className='card__text'>
                      <span>Turmas EJA:</span> {escolaLeft.eja[0].nTurmas}
                    </p>
                    :
                    <p className='card__text'>
                      <span>Turmas EJA:</span> Nenhuma
                    </p>
                  }
                  {
                    escolaLeft.ei[0] ?
                    <>
                      <p className='card__text'>
                        <span>Turmas EI:</span> {escolaLeft.ei[0].nTurmas}
                      </p>
                      <p className='card__text'>
                        <span>N° turmas parciais:</span> {escolaLeft.ei[0].parcial}
                      </p>
                      <p className='card__text'>
                        <span>N° turmas integrais:</span> {escolaLeft.ei[0].integral}
                      </p>
                    </>
                    :
                    <>
                      <p className='card__text'>
                        <span>Turmas EI:</span> Nenhuma
                      </p>
                      <p className='card__text'>
                        <span>N° turmas parciais:</span> Nenhuma
                      </p>
                      <p className='card__text'>
                        <span>N° turmas integrais:</span> Nenhuma
                      </p>
                    </>
                  }
                  {
                    escolaLeft.creche[0] ?
                    <p className='card__text'>
                      <span>Turmas Creche:</span> {escolaLeft.creche[0].nTurmas}
                    </p>
                    :
                    <p className='card__text'>
                      <span>Turmas EJA:</span> Nenhuma
                    </p>
                  }
                  {
                    escolaLeft.pre[0] ?
                    <p className='card__text'>
                      <span>Turmas Pré:</span> {escolaLeft.pre[0].nTurmas}
                    </p>
                    :
                    <p className='card__text'>
                      <span>Turmas EJA:</span> Nenhuma
                    </p>
                  }
                </>
              }
              </>
            }
            </section>
            :
            <p style={{textAlign:'center'}}>Selecione uma opção</p>
          }
        </div>
      </section>
      </section>
      <div className='rigth__side__container'>
        <h2 className='rigth__side__title'>Modalidade Escolar</h2>
        <section className='rigth__side__content'>
        <ButtonsOptions content={[
          {
            text: '0 à 3 anos',
            url: 'escola/03anos/show'
          },
          {
            text: 'EI',
            url: 'educacao-infantil/show'
          },
          {
            text: 'EJA',
            url: 'educacao-jovem-adulto/show'
          },
          {
            text: 'AEE',
            url: 'aee/show'
          },
          {
            text: '4 anos',
            url: 'escola/4anos/show'
          },
          {
            text: '5 anos',
            url: 'escola/5anos/show'
          },
          {
            text: 'PRÉ',
            url: 'pre/show'
          },
          {
            text: 'CRECHE',
            url: 'creche/show'
          },
          {
            text: 'N+1 C',
            url: 'escola/n1c/show'
          },
          {
            text: 'Parcial',
            url: 'parcial/show'
          },
          ,
          {
            text: 'Integral',
            url: 'integral/show'
          }
        ]}/>
      </section>
      
      {
        type === ''
        &&
        <section className='rigth__side__show'>
        {
          data && data.map((item) => (
            <section className='rigth__side__card' key={item._id}>
              {
                loading ?
                <span className="loader-"></span>
                :
                <>
                  <div className='rigth__content__card__edit'>
                    <p className='card__text'>
                      <span>Nome escola:</span> {item.nome}
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
                    <span>Modalidade escola: </span> {item.modalidade}
                  </p>
                </>
              }
            </section>
          )) 
        }
        </section>
      }

      {
        type === '0 à 3 anos'
        &&
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
                      <span>N° de turmas:</span> {item.nTurmas}
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
                    <span>Parcial:</span> {item.parcial}
                  </p>
                  <p className='card__text'>
                    <span>Integral:</span> {item.integral}
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
      }

      {
        type === 'EI'
        &&
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
                      <span>N° de turmas:</span> {item.nTurmas}
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
                    <span>Escola:</span> {item.fkescola.nome}
                  </p>  
                </>
              }
            </section>
          )) 
        }
        </section>
      }

      {
        type === 'EJA'
        &&
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
                      <span>N° de turmas:</span> {item.nTurmas}
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
                    <span>Escola:</span> {item.fkescola.nome}
                  </p>  
                </>
              }
            </section>
          )) 
        }
        </section>
      }

      {
        type === 'AEE'
        &&
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
                      <span>N° de turmas:</span> {item.nTurmas}
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
                    <span>Escola:</span> {item.fkescola.nome}
                  </p>  
                </>
              }
            </section>
          )) 
        }
        </section>
      }

      {
        type === 'PRÉ'
        &&
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
                      <span>N° de turmas:</span> {item.nTurmas}
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
                    <span>Escola:</span> {item.fkescola.nome}
                  </p>  
                </>
              }
            </section>
          )) 
        }
        </section>
      }

      {
        type === 'CRECHE'
        &&
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
                      <span>N° de turmas:</span> {item.nTurmas}
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
                    <span>Escola:</span> {item.fkescola.nome}
                  </p>  
                </>
              }
            </section>
          )) 
        }
        </section>
      }

      {
        type === 'N+1 C'
        &&
        <section className='rigth__side__show'>
        {
          data && data.map((item) => (
            <section className='rigth__side__card' key={item._id}>
              {
                loading ?
                <span className="loader-"></span>
                :
                <>
                  <div className='rigth__content__card__edit'>
                    <p className='card__text'>
                      <span>Nome escola:</span> {item.nome}
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
                    <span>Modalidade escola: </span> {item.modalidade}
                  </p>
                  <p className='card__text'>
                    <span>Nasceu + 1 cidadão: </span> {item.n1}
                  </p>
                </>
              }
            </section>
          )) 
        }
        </section>
      }

      {
        type === 'Parcial'
        &&
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
                      <span>Nome aluno:</span> {item.nome}
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
                    <span>Data nascimento: </span> {item.dataNasc}
                  </p>
                  <p className='card__text'>
                    <span>Escola: </span> {item.fkescola.nome}
                  </p>
                  <p className='card__text'>
                    <span>Periodo: </span> {item.periodo}
                  </p>
                  <p className='card__text'>
                    <span>Nome da mãe: </span> {item.nomeMae}
                  </p>
                  <p className='card__text'>
                    <span>Nome do pai: </span> {item.nomePai}
                  </p>
                  <p className='card__text'>
                    <span>Bairro: </span> {item.bairro}
                  </p>
                  <p className='card__text'>
                    <span>Rua: </span> {item.rua}
                  </p>
                  <p className='card__text'>
                    <span>N° casa: </span> {item.nCasa}
                  </p>
                  <p className='card__text'>
                    <span>Contato: </span> {item.contato}
                  </p>
                </>
              }
            </section>
          )) 
        }
        </section>
      }

      {
        type === 'Integral'
        &&
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
                      <span>Nome aluno:</span> {item.nome}
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
                    <span>Data nascimento: </span> {item.dataNasc}
                  </p>
                  <p className='card__text'>
                    <span>Escola: </span> {item.fkescola.nome}
                  </p>
                  <p className='card__text'>
                    <span>Periodo: </span> {item.periodo}
                  </p>
                  <p className='card__text'>
                    <span>Nome da mãe: </span> {item.nomeMae}
                  </p>
                  <p className='card__text'>
                    <span>Nome do pai: </span> {item.nomePai}
                  </p>
                  <p className='card__text'>
                    <span>Bairro: </span> {item.bairro}
                  </p>
                  <p className='card__text'>
                    <span>Rua: </span> {item.rua}
                  </p>
                  <p className='card__text'>
                    <span>N° casa: </span> {item.nCasa}
                  </p>
                  <p className='card__text'>
                    <span>Contato: </span> {item.contato}
                  </p>
                </>
              }
            </section>
          )) 
        }
        </section>
      }
      </div>
    </article>
  )
}

export default Escola