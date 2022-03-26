import React, { useEffect, useState } from 'react'
import Products from '../Products/Products'
import SelectedBike from '../SelectedBike/SelectedBike'
import './Shope.css'

const Shope = () => {
    const [products, setProducts] = useState([])
    const [selectedBikes, setSelectedBikes] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    const handleAddCart = (product) => {
        if (selectedBikes.length >= 4) {
            return
        } else {
            setSelectedBikes([...selectedBikes, product])
        }
    }
    const handleTryAgain = () => {
        setSelectedBikes([])
    }
    return (
        <div className="shope-container ms-5 ">
            <div className="card-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-5">
                {products.map((product) => (
                    <Products
                        key={product.id}
                        product={product}
                        handleAddCart={handleAddCart}
                    ></Products>
                ))}
            </div>
            <div className="selected-container m-5">
                <h4 className=" text-center my-5">Selected Bike</h4>
                {selectedBikes.map((selectedBike) => (
                    <SelectedBike
                        key={selectedBike.id}
                        selectedBike={selectedBike}
                    ></SelectedBike>
                ))}
                <div>
                    <div className="mx-3 my-5">
                        <button className="btn mb-2 btn-outline-success">
                            Choose One
                        </button>
                        <button
                            className="btn  btn-outline-danger"
                            onClick={handleTryAgain}
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shope
