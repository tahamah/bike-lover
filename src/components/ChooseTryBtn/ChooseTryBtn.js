import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChampagneGlasses, faXmark } from '@fortawesome/free-solid-svg-icons'
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
    const { name, img } = chooseOne
    console.log(chooseOne)
    const [modalIsOpen, setIsOpen] = React.useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    const model = () => {
        handleChooseOne()
        openModal()
    }

    return (
        <div>
            <button className="btn mb-2 btn-outline-success" onClick={model}>
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
                <div className="d-flex flex-column ">
                    <div>
                        <button
                            className="btn btn-outline-danger"
                            onClick={closeModal}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <div className="text-center container w-50">
                        <h1 className="text-warning">
                            Congratulations!!
                            <FontAwesomeIcon
                                className="text-danger ms-2"
                                icon={faChampagneGlasses}
                            />
                        </h1>
                        <img className="img-fluid pt-5" src={img} alt="" />
                        <h3>{name}</h3>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ChooseTryBtn
