import React, { useState } from 'react'
import { useProductStore } from '../store/product'
import { useToast } from '../store/toast'
import { useRedirect } from '../store/redirect'
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })
  const {createProduct} = useProductStore()
  const { sendMessage, debouncer } = useToast()
  const { willRedirect, setWillRedirect } = useRedirect()
  const navigate = useNavigate()
  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct)
    sendMessage(message, debouncer)
    if(!success)
      return
    setNewProduct({name: "", price: "", image: ""})
    if(willRedirect){
      navigate( "/" )
    }
  }
  const inputClasses = "bg-slate-100/10 rounded border w-full p-2 my-2 text-slate-300"
  return (
    <div className='p-4 flex flex-col items-center w-full sm:w-1/2 mx-auto bg-slate-600 rounded'>
      <h1 className="mb-4 text-4xl text-slate-300">Create Page</h1>
      <div className='flex flex-col w-5/6'>
        <input 
          className={inputClasses} 
          placeholder="Product Name" 
          value={newProduct.name} 
          onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
        />
        <input 
          className={inputClasses} 
          placeholder="Price" 
          type='number'
          value={newProduct.price}
          onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
        />
        <input 
          className={inputClasses} 
          placeholder="Image URL" 
          value={newProduct.image}
          onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
        />
        <div className='flex text-slate-200'>
          <h1>
            Return to main on completion? 
            <input className='ml-2 my-auto' type='checkbox' checked={willRedirect} onChange={() => setWillRedirect(!willRedirect)} />
          </h1>
        </div>
        <button 
          className={`${inputClasses} bg-sky-600/20 hover:bg-slate-100/20`}
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
    </div>
  )
}

export default CreatePage