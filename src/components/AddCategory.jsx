import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function AddCategory ({ onSetCategory }) {
  const [inputValue, setInputValue] = useState('')

  const handleChangeInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return

    onSetCategory({ inputValue })
    setInputValue('')
  }

  return (
    <>
      <form action='' onSubmit={handleSubmitForm} aria-label='form'>
        <input
          type='text'
          placeholder='Buscar gif...'
          value={inputValue}
          onChange={handleChangeInput}
        />
        <button className='btn-buscar' type='submit'>Buscar...</button>
      </form>
    </>
  )
}
