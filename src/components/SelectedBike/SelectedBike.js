import React from 'react'

const SelectedBike = ({ selectedBike }) => {
    const { name, img } = selectedBike
    return (
        <div className="ms-2 mb-3 selected-bike d-flex align-items-center">
            <img className="img-fluid w-25 me-2 rounded" src={img} alt="" />
            <p>{name}</p>
        </div>
    )
}

export default SelectedBike
