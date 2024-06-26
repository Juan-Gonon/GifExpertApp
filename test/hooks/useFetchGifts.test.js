import { describe, expect, it } from 'vitest'
import { useFetchGifs } from '../../src/hook/useFetchGifs'
import { renderHook } from '@testing-library/react'

describe('Pruebas en custom hook', () => {
  it('debe de regresar el estado inicial ', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))
    const { image, isLoading } = result.current

    // console.log(result)
    // console.log(image)

    expect(image.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })
})
