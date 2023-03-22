import React from 'react'
import { StateContextCustom } from '../context/StateContext'

const Products = () => {
    const {state : {products},filterProduct} = StateContextCustom()
    console.log((products));
  return (
    <div className='flex flex-warp gap-10 mt-2 justify-center'>{products?. map (pd => {
        return (
            <Products key={pd.id} {...pd}/>
        )
    })}
    </div>
  )
}

export default Products