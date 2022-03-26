import './App.css'
import Header from './components/Header/Header'
import Shope from './components/Shope/Shope'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

function App() {
    return (
        <div>
            <div className="container bg-white rounded mb-5 pb-5">
                <Header></Header>
                <Shope></Shope>
            </div>
            <footer className="text-center footer ">
                <p className="mb-0 ">
                    <FontAwesomeIcon icon={faCopyright} /> copyright 2022 bike
                    lover
                </p>
            </footer>
        </div>
    )
}

export default App
