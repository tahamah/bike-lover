import React, { useEffect, useState } from 'react'
import Products from '../Products/Products'
import './Shope.css'

const Shope = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    return (
        <div className="shope-container ms-5 ">
            <div className="card-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-5">
                {products.map((product) => (
                    <Products key={product.id} products={product}></Products>
                ))}
            </div>
            <div className="selected-container ms-5 mt-5">
                <h4 className=" text-center mt-5">Selected Bike</h4>
            </div>
        </div>
    )
}

export default Shope
