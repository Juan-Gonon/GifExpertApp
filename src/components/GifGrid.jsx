import { getGif } from '../helpers/getGifs'

// eslint-disable-next-line react/prop-types
export function GifGrid ({ category }) {
  getGif({ category })

  return (
    <>
      <h4>{category}</h4>
      <p>Hola Mundo</p>
    </>
  )
}
