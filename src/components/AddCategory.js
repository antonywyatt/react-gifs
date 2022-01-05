import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                placeholder='Nueva Categoría'
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}
