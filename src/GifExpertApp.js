import React, { useState }  from 'react'
import { AddCategory } from './components/AddCategory'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One puch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     //setCategories( ['Marvel', ...categories] )
    //     setCategories( (cats) => [...cats, 'Marvel'])
    // }

    return (
        <>
            <h2>GifExperApp</h2>
            <AddCategory />
            <hr />
            <ol>
               {
                   categories.map( category => {
                       return (
                           <li key={ category }>{category}</li>
                       )
                   })
               }
            </ol>
        </>
    )
}