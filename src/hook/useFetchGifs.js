import { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs'
// import { data } from '../mocks/getGifts.json'

export function useFetchGifs ({ category }) {
  const [image, setImage] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const newImage = async () => {
      const newImg = await getGif({ category })
      setImage(newImg)
      setIsLoading(false)
    }

    newImage()
  }, [category])

  return {
    image,
    isLoading
  }
}
