import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className=" text-center mt-5">
            <h1 className="header-title pt-5 pb-3">
                Hello!!
                <span className=" text-danger fw-bolder ms-3">Bike Lover</span>
            </h1>
            <h1>Choose Minimum Four Bikes</h1>
        </div>
    )
}

export default Header
