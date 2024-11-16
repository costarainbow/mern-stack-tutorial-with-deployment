import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const {fetchProducts, products} = useProductStore()
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])
  
  
  return (
    <div className='text-slate-300 flex flex-col text-center text-4xl mt-4'>
      <div className=''>
        Current Products 🚀
      </div>

      {/* region Products Display */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 w-full md:w-3/4 mx-auto my-8 gap-y-8'>
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
      <div className='mb-16'>
        {products.length === 0 && <h1>
          No products found 😢{" "}
        </h1>}
        <Link className='underline text-purple-400 hover:text-purple-300' to="/create">Add Product</Link>
      </div>
    </div>

  )
}

export default HomePage