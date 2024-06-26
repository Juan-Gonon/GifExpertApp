import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('<GifItem />', () => {
  afterEach(() => {
    cleanup()
  })

  const title = 'Kamila'
  const url = 'https://media3.giphy.com/media/pCGyLbTeliIwqVU9Md/giphy.gif?cid=1470fdd1rxiigktcrpiz7quitx6s9znwhfx50bj355m95trp&ep=v1_gifs_search&rid=giphy.gif&ct=g'

  it('show to give <GifItem />', () => {
    const { container } = render(<GifItem />)
    expect(container).toMatchSnapshot()
  })

  it('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />)
    screen.debug()

    // expect(screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)

    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  it('debe de mostrar el titulo en el componente ', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})
