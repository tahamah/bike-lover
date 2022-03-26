import './App.css'
import Header from './components/Header/Header'
import Shope from './components/Shope/Shope'
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div>
            <div className="container bg-white rounded ">
                <Header></Header>
                <Shope></Shope>
                <QuestionAnswer></QuestionAnswer>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default App
