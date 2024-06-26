import { afterEach, describe, expect, it, vi } from 'vitest'
import { AddCategory } from '../../src/components/AddCategory'
import { fireEvent, render, screen, cleanup } from '@testing-library/react'

describe('Prueba en <AddCategory />', () => {
  afterEach(() => {
    cleanup()
  })

  it('debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onSetCategory={() => {}} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'kamila' } })
    screen.debug()
    expect(input.value).toBe('kamila')
  })

  it('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Kamila'
    const onNewCategory = vi.fn()

    render(<AddCategory onSetCategory={onNewCategory} />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)
    // screen.debug()
    expect(input.value).toBe('')
    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith({ inputValue })
  })

  it('No debe de llamar el onNewCategory si el input está vació', () => {
    const onNewCategory = vi.fn()

    render(<AddCategory onSetCategory={onNewCategory} />)

    const form = screen.getByRole('form')

    fireEvent.submit(form)

    expect(onNewCategory).not.toHaveBeenCalled()
  })
})
