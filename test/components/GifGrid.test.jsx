import { describe, expect, it } from 'vitest'
import { GifGrid } from '../../src/components/GifGrid'
import { render, screen } from '@testing-library/react'

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch'
  it('debe de mostrar el loading inicialmente', () => {
    render(<GifGrid category={category} />)
    screen.debug()

    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  })
})
