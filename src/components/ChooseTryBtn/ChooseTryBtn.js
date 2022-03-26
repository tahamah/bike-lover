import React from 'react'

const ChooseTryBtn = ({ handleTryAgain, handleChooseOne, chooseOne }) => {
    console.log(chooseOne)
    return (
        <div>
            <button
                className="btn mb-2 btn-outline-success"
                onClick={handleChooseOne}
            >
                Choose One
            </button>

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
