import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegSun, FaPlus } from 'react-icons/fa6'

const Navbar = () => {
  const buttonClasses = 'mx-2'
  const buttonSize = 24
  return (
    <div className='flex justify-between h-16 items-center text-slate-50 px-4 md:px-16 rounded-none pt-2'>
      <Link to={'/'} className='text-2xl sm:text-3xl font-bold'>Product Store 🛒</Link>
      <div className='spacing-16 flex'>
        <Link to={'/create'}>
          <button className={`${buttonClasses} text-slate-100 hover:animate-pulse-fast`}><FaPlus fontSize={buttonSize} /></button>
        </Link>
        {/* <button className={`${buttonClasses}}`}><FaRegSun fontSize={buttonSize} /></button> */}
      </div>
    </div>
  )
}

export default Navbar