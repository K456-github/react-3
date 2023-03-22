import React from 'react'

const Product2 = (props) => {
    const {id,image,description,title,price} = props
  return (
    <div className='w-72 shadow rounded flex flex-col p-7'>
        <img src={image} className='max-w-[150px] h-[150px]' alt="" />
       <div className="">
       <h2 className="text-gray-500 text-2xl font-semibold">
            {title}
        </h2>
        <p>${price}</p>
        <button className='px-6 py-2 bg-yellow-200'>Add To Cart</button>
        <button className='px-6 py-2 bg-yellow-200'>Detail</button>
       </div>

    </div>
  )
}

export default Product2