import React from 'react'

const Products = ({ products }) => {
    const { name, price, img } = products
    console.log(products)
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h5 className="card-text">Price: ${price}</h5>
                </div>
                <div className="card-f mt-5 text-center">
                    <button className=" w-100 btn btn-outline-success">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products
