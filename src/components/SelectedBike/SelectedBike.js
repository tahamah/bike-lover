import React from 'react'
import './SelectedBike.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const SelectedBike = ({ selectedBike, removeSelectedBikes }) => {
    const { name, img } = selectedBike
    return (
        <div className="ms-2 mb-3 selected-bike d-flex   align-items-center">
            <div className="d-flex align-items-center">
                <img className="img-fluid w-25 me-3 rounded" src={img} alt="" />
                <p className="m-0">{name.slice(0, 12)}</p>
            </div>
            <button
                onClick={() => removeSelectedBikes(selectedBike)}
                className=" delete-btn"
            >
                <FontAwesomeIcon className="mt-2 mx-1 mb-1" icon={faTrashCan} />
            </button>
        </div>
    )
}

export default SelectedBike
