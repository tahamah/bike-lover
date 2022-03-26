import React from 'react'
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Products = ({ product, handleAddCart }) => {
    const { name, price, img } = product
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
                    <button
                        onClick={() => handleAddCart(product)}
                        className="w-100 p-2 fw-bolder add-btn"
                    >
                        Add to Cart <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products
