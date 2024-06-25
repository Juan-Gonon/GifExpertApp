import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

function App () {
  const [categories, setCategories] = useState(['One punch', 'Two Punch'])

  const onAddCategory = ({ inputValue }) => {
    console.log('Agregado')
    setCategories((prevState) => ([...prevState, inputValue]))
  }

  return (
    <>
      <h1>Gif Expert</h1>
      <AddCategory setCategory={onAddCategory} />
      <ol>
        {
          categories?.map((element, item) => (
            <li key={item}>{element}</li>
          ))
        }
      </ol>
    </>
  )
}

export default App
