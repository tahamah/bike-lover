import React from 'react'
import './SelectedBike.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const SelectedBike = ({ selectedBike }) => {
    const { name, img } = selectedBike
    return (
        <div className="ms-2 mb-3 selected-bike d-flex   align-items-center">
            <div className="d-flex align-items-center">
                <img className="img-fluid w-25 me-3 rounded" src={img} alt="" />
                <p className="m-0">{name}</p>
            </div>
            <FontAwesomeIcon className="me-5" icon={faTrashCan} />
        </div>
    )
}

export default SelectedBike
