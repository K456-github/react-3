import React, { useState } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { StateContextCustom } from '../context/StateContext'

const Navbar = () => {
    const [search,setsearch] = StateContextCustom()
  return (
    <div className='flex justify-around shadow-sm p-5'>
        <h2>Shop</h2>
        <div className='flex gap-5'>
            <input type="text" value={search} onChange={e => setsearch(e.target.value)} className='bg-orange-200 outline-none border-1 ' />
            <div className="relative">
            <AiOutlineShoppingCart className='text-2xl'/>
            <span className='absolute flex item-center text-white bottom-3 p-1 rounded-[100%]'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar