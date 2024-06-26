import { afterEach, describe, expect, it, vi } from 'vitest'
import { GifGrid } from '../../src/components/GifGrid'
import { render, screen, cleanup } from '@testing-library/react'
import { useFetchGifs } from '../../src/hook/useFetchGifs'

vi.mock('../../src/hook/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {
  afterEach(() => {
    cleanup()
  })

  const category = 'One Punch'

  it('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      image: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)
    screen.debug()

    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  })

  it('Debe de mostrar items cuando se cargan las imágenes useFetchGif', () => {
    const gifts = [
      {
        id: 'ABC',
        title: 'vegueta',
        url: 'https://localhost/vegueta.jpg'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      image: gifts,
      isLoading: false
    })

    render(<GifGrid category={category} />)

    screen.debug()
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
