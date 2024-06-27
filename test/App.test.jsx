import { describe, it, expect, beforeEach } from 'vitest'
import App from '../src/App'
import { cleanup, render, screen } from '@testing-library/react'

describe('Pruebas en <App />', () => {
  beforeEach(() => {
    cleanup()
  })

  it('Snapshot App', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

  it('Render App', () => {
    render(<App />)
    screen.debug()
  })
})
