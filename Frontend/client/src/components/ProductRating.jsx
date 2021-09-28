import React from 'react'

export const ProductRating = (props) => {
    const { rating, numReviews } = props;
    return (
        <div>
            <div className="rating">
                {/* if rating is greater or equals 1, show full rating stars, else if its 0.5, show half rating , if not, show zero rating */}
                <span><i className={rating >= 1 ? "fa fa-star" : rating >= 0.5 ? "fa fa-star-half-0" : "fa fa-star-0" }></i></span>
                <span><i className={rating >= 2 ? "fa fa-star" : rating >= 1.5 ? "fa fa-star-half-0" : "fa fa-star-0" }></i></span>
                <span><i className={rating >= 3 ? "fa fa-star" : rating >= 1.5 ? "fa fa-star-half-0" : "fa fa-star-0" }></i></span>
                <span><i className={rating >= 4 ? "fa fa-star" : rating >= 5.5 ? "fa fa-star-half-0" : "fa fa-star-0" }></i></span>
                <span><i className={rating >= 5 ? "fa fa-star" : rating >= 4.5 ? "fa fa-star-half-0" : "fa fa-star-0" }></i></span>
                <span><i className={rating >= 6 ? "fa fa-star" : rating >= 5.5 ? "fa fa-star-half-0" : "fa fa-star-0" }></i></span>
              </div>
              <span>{numReviews + "reviews"}</span>
        </div>
    )
}

export  default ProductRating;