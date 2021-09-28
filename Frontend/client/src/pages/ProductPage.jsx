import React from 'react'
import data from '../data';
import ProductRating from '../components/ProductRating';
import { Link } from 'react-router-dom';



const ProductPage = (props) => {
    const product = data.Products.find((x) => x._id === props.match.params.id);
    if(!product) {
        return <div >Can't Find Product!</div>
    }
    return (
        <>
        <Link to="/">Return Home</Link>
        <div className="row top">
            <div className="col-2">
                <img src={product.image} alt={product.name} className="large" />
            </div>
            <div className="col-1">
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                        <ProductRating rating={product.rating}
                        numReviews={product.numReviews} 
                        />
                    </li>
                    <li>price: ${product.price}</li>
                    <li>
                        Description: <p>{product.descripton}</p>
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price">{product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status</div>
                                <div>
                                    {product.stock > 0 ? (
                                        <span className="success">Stock available</span>
                                    ): (
                                        <span className="error">Stock not available</span>
                                    )}
                                </div>
                            </div>
                        </li>
                        <li><button className="primary block">Add tp Cart</button></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductPage;
