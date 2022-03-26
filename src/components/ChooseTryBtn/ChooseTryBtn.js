import React from 'react'

const ChooseTryBtn = ({ handleTryAgain }) => {
    return (
        <div>
            <button className="btn mb-2 btn-outline-success">Choose One</button>

            <button
                className="btn  btn-outline-danger"
                onClick={handleTryAgain}
            >
                Try Again
            </button>
        </div>
    )
}

export default ChooseTryBtn
