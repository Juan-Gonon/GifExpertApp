import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function AddCategory ({ setCategory }) {
  const [inputValue, setInputValue] = useState('')

  const handleChangeInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    if (inputValue.trim().length <= 1) return

    setCategory({ inputValue })
    setInputValue('')
  }

  return (
    <>
      <form action='' onSubmit={handleSubmitForm}>
        <input
          type='text'
          placeholder='Buscar gif...'
          value={inputValue}
          onChange={handleChangeInput}
        />
        <button type='submit'>Buscar...</button>
      </form>
    </>
  )
}
