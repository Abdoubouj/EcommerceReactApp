import React from 'react'
import ProductCard from '../../components/ProductCard'

const Home = ({products}) => {
  return (
    <div className='p-4 d-flex justify-content-center flex-wrap gap-3'>
      {products?.map((product)=>(
        <ProductCard product={product}/>
      ))}
    </div>
  )
}

export default Home
