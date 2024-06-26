import { describe, expect, it } from 'vitest'
import { useFetchGifs } from '../../src/hook/useFetchGifs'
import { renderHook, waitFor } from '@testing-library/react'

describe('Pruebas en custom hook', () => {
  it('debe de regresar el estado inicial ', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))
    const { image, isLoading } = result.current

    // console.log(result)
    // console.log(image)

    expect(image.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  it('debe de retornar un arreglo de imágenes e isLoading en false ', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))

    await waitFor(
      () => expect(result.current.image.length).toBeGreaterThan(0)
    )
    const { image, isLoading } = result.current
    expect(image.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
