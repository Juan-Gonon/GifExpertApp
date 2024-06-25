import { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs'
import { GifItem } from './GifItem'

// eslint-disable-next-line react/prop-types
export function GifGrid ({ category }) {
  const [image, setImage] = useState([])

  useEffect(() => {
    const newImage = async () => {
      const newImg = await getGif(category)
      setImage(newImg)
    }

    newImage()
  }, [category])

  return (
    <>
      <h4>{category}</h4>
      <div className='card-grid'>
        {
          image?.map((img) => (
            <GifItem key={img.id} {...img} />
          ))
        }
      </div>
    </>
  )
}
