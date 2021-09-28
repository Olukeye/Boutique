import React from 'react'
import ProductRating from './ProductRating';


const Product = (props) => {
    const {product} = props;
    return (
        <div className="grid-container">
            <div key={product._id} className="card">
            <a href={`/product/${product._id}`}>
              <img src={product.image} className="medium" alt={product.name} />
            </a>
            <div className="card-body">
              <a href ={`/product/${product._id}`} className="product-body"></a> 
              <h2>{product.name}</h2>
             <ProductRating rating={product.rating} numReview={product.numReviews} />
             <div className="price">#{product.price}</div>
            </div>
          </div>
        </div>
    )
}

export default Product;