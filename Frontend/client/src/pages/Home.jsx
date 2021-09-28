import React from 'react'
import data from '../data';
import Product from '../components/Product';


 const Home = () => {
    return (
        <div>
        <div className="row center">
          {data.Products.map((product => (
           <Product key={product._id} product ={product} />
          )))}
        </div>
        </div>
    )
}

export default Home;