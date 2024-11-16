import React from 'react'
import { useToast } from '../store/toast'
import { FaCircleXmark } from 'react-icons/fa6'

const Toast = () => {
    const { isOpen, message, closeToast, debouncer } = useToast()
    return (
        <div className={`text-slate-100 fixed left-0 justify-center w-full bottom-16 ${isOpen ? "flex" : "hidden"}`}>
            <div className='w-1/3 h-48 bg-slate-700 rounded p-2 mx-2 flex flex-col justify-center items-center gap-2'>
            <button 
                className='flex justify-end w-full'
                onClick={() => closeToast(debouncer)}
            >
                <FaCircleXmark color='white' />
            </button>
                <h1 className='flex-grow w-full text-center my-auto'>
                    {message}
                </h1>
            </div>
        </div>
    )
}

export default Toast