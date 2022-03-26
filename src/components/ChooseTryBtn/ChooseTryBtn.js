import React from 'react'
import Modal from 'react-modal'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}
Modal.setAppElement('#root')

const ChooseTryBtn = ({ handleTryAgain, handleChooseOne, chooseOne }) => {
    console.log(chooseOne)
    const [modalIsOpen, setIsOpen] = React.useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }
    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
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
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>close</button>
                <h1>Done</h1>
            </Modal>
        </div>
    )
}

export default ChooseTryBtn
