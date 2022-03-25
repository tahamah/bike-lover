import React from 'react'
import './Products.css'

const Products = ({ products }) => {
    const { name, price, img } = products
    console.log(products)
    return (
        <div className="col">
            <div className="card  rounded rounded-3 border-success mx-2 mb-3 h-100 product-container">
                <img
                    src={img}
                    className="card-img-top product-img p-1"
                    alt=""
                />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h5 className="card-text">Price: ${price}</h5>
                </div>
                <div className="card-f mt-2 text-center">
                    <button className="w-100 p-2 fw-bolder add-btn">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products
