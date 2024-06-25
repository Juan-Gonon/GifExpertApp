import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

function App () {
  const [categories, setCategories] = useState(['One punch'])

  const onAddCategory = ({ inputValue }) => {
    if (categories.includes(inputValue)) return

    setCategories((prevState) => ([...prevState, inputValue]))
  }

  return (
    <>
      <h1>Gif Expert</h1>
      <AddCategory onSetCategory={onAddCategory} />
      {
          categories?.map((element, item) => (
            <GifGrid key={`${element}-${item}`} category={element} />
          ))
      }
    </>
  )
}

export default App
