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
        <div className="shope-container m-5 ">
            <div className="card-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {products.map((product) => (
                    <Products key={product.id} products={product}></Products>
                ))}
            </div>
            <div className="select-container ms-5">
                <h1 className=" text-center">summary</h1>
            </div>
        </div>
    )
}

export default Shope
