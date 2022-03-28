import React, { useEffect, useState } from 'react'
import ChooseTryBtn from '../ChooseTryBtn/ChooseTryBtn'
import Products from '../Products/Products'
import SelectedBike from '../SelectedBike/SelectedBike'
import './Shope.css'

const Shope = () => {
    const [products, setProducts] = useState([])
    const [selectedBikes, setSelectedBikes] = useState([])
    const [chooseOne, setChooseOne] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    const handleAddCart = (product) => {
        if (selectedBikes.length >= 4) {
            alert("Oops!! You can't add more than four.")
        } else {
            const exist = selectedBikes.find(
                (products) => products.id === product.id
            )
            if (!exist) {
                setSelectedBikes([...selectedBikes, product])
            } else {
                alert('Hello!! It already Selected.')
            }
        }
    }
    const handleTryAgain = () => {
        setSelectedBikes([])
    }
    const handleChooseOne = () => {
        const rand = Math.floor(Math.random() * selectedBikes.length)
        setChooseOne(selectedBikes[rand])
    }
    return (
        <div className="p-5 row">
            <div className="col-12 mb-5 col-md-9">
                <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-5">
                    {products.map((product) => (
                        <Products
                            key={product.id}
                            product={product}
                            handleAddCart={handleAddCart}
                        ></Products>
                    ))}
                </div>
            </div>
            <div className="selected-container col-12 col-md-3 ">
                <h4 className=" text-center my-5">Selected Bike</h4>
                {selectedBikes.map((selectedBike) => (
                    <SelectedBike
                        key={selectedBike.id}
                        selectedBike={selectedBike}
                    ></SelectedBike>
                ))}

                <div className="mx-3 my-5">
                    <ChooseTryBtn
                        chooseOne={chooseOne}
                        handleChooseOne={handleChooseOne}
                        handleTryAgain={handleTryAgain}
                    ></ChooseTryBtn>
                </div>
            </div>
        </div>
    )
}

export default Shope
