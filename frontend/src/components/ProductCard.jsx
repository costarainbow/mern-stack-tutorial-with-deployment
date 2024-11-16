import React from 'react'
import { FaPen, FaCircleXmark } from 'react-icons/fa6'
import { useProductStore } from '../store/product'
import { useModal } from '../store/modal'

const ProductCard = ({product}) => {
  
  const {name, price, image} = product
  const { deleteProduct } = useProductStore()
  const { openModal } = useModal()

  const buttonClasses = "h-8 w-8 flex items-center justify-center text-neutral-200 hover:text-neutral-700 rounded"
  const buttonSize = 18

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    console.log(success)
    console.log(message)
  }

  const trimmer = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength - 3) + '...' : str
  }

  return (
    <div className={`min-h-32 w-64 mx-auto bg-slate-800 p-4 rounded gap-64`}>
        <img src={image} className='h-32 w-full mx-auto object-cover rounded-t' alt="" />
        <div className='mx-auto py-4 flex flex-col gap-2'>
            <h1>{trimmer(name, 12)}</h1>
            <h1 className='text-2xl'>{price.toFixed(2)}</h1>
            <div className='flex justify-end gap-4'>
              <button 
                className={`${buttonClasses} hover:bg-blue-300/80 bg-blue-600`}
                onClick={() => openModal(product.name, product.price, product.image, product._id)}
              >
                <FaPen size={buttonSize} />
              </button>
              <button 
                className={`${buttonClasses} hover:bg-red-300/80 bg-red-600 rounded`} 
                onClick={() => deleteProduct(product._id)}
              >
                <FaCircleXmark size={buttonSize} />
              </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard