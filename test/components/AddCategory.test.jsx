import { describe, expect, it } from 'vitest'
import { AddCategory } from '../../src/components/AddCategory'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Prueba en <AddCategory />', () => {
  it('debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onSetCategory={() => {}} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'kamila' } })
    screen.debug()
    expect(input.value).toBe('kamila')
  })
})
