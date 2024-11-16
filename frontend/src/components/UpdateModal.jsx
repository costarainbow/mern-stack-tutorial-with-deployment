import React, { useEffect, useRef, useState } from 'react'
import { useModal } from '../store/modal'
import { useToast } from '../store/toast'
import { useProductStore } from '../store/product'
import { FaCircleXmark } from 'react-icons/fa6'

const UpdateModal = () => {
    const modalRef = useRef(null)
    const { isOpen, product, setIsOpen } = useModal()
    const { sendMessage, debouncer } = useToast()
    const { updateProduct } = useProductStore()
    const [prod, setProd] = useState({
        name: product.name,
        price: product.price,
        image: product.image,
        id: product.id
    })
    useEffect(() => {
      setProd(product)
    }, [isOpen])
    
    const inputClasses = "rounded bg-slate-500 px-2 py-1"
    const buttonClasses = "rounded p-2 w-20 text-sm"

    const handleUpdate = async (prod) => {
        console.log(prod)
        console.log(prod.id)
        console.log(prod.name)
        const {success, message } = await updateProduct(prod)
        console.log(success, message)
        if(success)
            setIsOpen(false)
        sendMessage(message, debouncer)
    }
    if(isOpen)
    return (
        <div 
            className={`z-10 text-white fixed left-0 top-0 w-full h-full bg-slate-800/50 overflow-auto justify-center ${isOpen ? "flex flex-col" : "hidden"}`}
            onClick={(e) => {
                if(modalRef.current === e.target)
                    setIsOpen(false)
            }}
            ref={modalRef}
        >
            <div>
                <div className='z-20 text-2xl text-center w-1/3 my-auto mx-auto bg-slate-600 rounded flex flex-col py-8 px-8 gap-4'> 
                    <button 
                        className='z-20 absolute'
                        onClick={() => setIsOpen(false)}
                    >
                        <FaCircleXmark size={16} />
                    </button>
                    <h1>Update Product</h1>
                    <input
                        className={`${inputClasses}`}
                        onChange={(e) => {
                            setProd({...prod, name: e.target.value})
                        }}
                        value={prod.name}
                        placeholder='name'
                    />
                    
                    <input
                        className={`${inputClasses}`}
                        type='number'
                        onChange={(e) => {
                            setProd({...prod, price: e.target.value})
                        }}
                        value={prod.price}
                        placeholder='00.00'
                    />
                    <input
                        className={`${inputClasses}`}
                        onChange={(e) => {
                            setProd({...prod, image: e.target.value})
                        }}
                        value={prod.image}
                        placeholder='image url'
                    />
                    <div className='flex justify-end gap-2'>
                        <button 
                            onClick={() => handleUpdate(prod)} 
                            className={`${buttonClasses} bg-blue-400`}
                        >
                            Confirm
                        </button>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className={`${buttonClasses} bg-red-400`}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    return<></>
}

export default UpdateModal