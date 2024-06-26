import { GifItem } from './GifItem'
import { useFetchGifs } from '../hook/useFetchGifs'

// eslint-disable-next-line react/prop-types
export function GifGrid ({ category }) {
  const { image, isLoading } = useFetchGifs({ category })

  return (
    <>
      <h4>{category}</h4>
      <div className='card-grid'>
        {
          isLoading
            ? <div>Cargando...</div>
            : (
                image?.map((img) => (
                  <GifItem key={img.id} {...img} />
                ))
              )
        }
      </div>
    </>
  )
}
