import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div>
            <footer className="text-center footer ">
                <p className="mb-0 ">
                    <FontAwesomeIcon icon={faCopyright} /> copyright 2022 bike
                    lover
                </p>
            </footer>
        </div>
    )
}

export default Footer
