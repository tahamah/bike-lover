import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className=" text-center py-5">
            <h1 className="header-title pt-5 pb-3">
                Hello!!
                <span className=" text-danger fw-bolder ms-3">Bike Lover</span>
            </h1>
            <h1>Select Four bikes</h1>
            <h2>I will choose one for you.</h2>
        </div>
    )
}

export default Header
