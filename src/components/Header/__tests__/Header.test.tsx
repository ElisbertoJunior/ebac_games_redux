import { screen } from '@testing-library/react'
import Header from '..'

import { renderizaComProvider } from '../../../utils/tests'
import { Plataformas } from '../../Produto/styles'

describe('Testes para o componente header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['windows'],
              preco: 149.9,
              precoAntigo: 199.9,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'FPS',
              imagem: '',
              plataformas: ['windows', 'PS5', 'XBOX'],
              preco: 249.9,
              precoAntigo: 399.9,
              titulo: 'Call of Duty'
            }
          ]
        }
      }
    })
    expect(screen.queryByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
