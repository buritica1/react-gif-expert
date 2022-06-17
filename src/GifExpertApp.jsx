import React, {useState} from 'react'

import { AddCategory, GifGrid } from './components';



const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return

        setCategories([ newCategory, ...categories ])
    }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
     <AddCategory 
        // setCategories={setCategories}
        onNewCategory={ onAddCategory }
    />

      {/* Listado de Gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      { 
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            ) ) 
        }

      {/* Gif item */}
    </>
  )
}

export default GifExpertApp
