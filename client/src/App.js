import "./App.css"
import Listings from "./pages/Listings"
import Card from "./components/Card/Card"
import house from "./test/mock-data"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
    <Router>
        <div className="App">

            

            <Routes>
                <Route path="/">{/* Home Page component here */}</Route>
                <Route path="/propertyfeauture">{/* Feature Page component here */}</Route>
                <Route path="/propertylisting"> <Listings /></Route>
                <Route path="/booking">{/*Booking Page components here*/}</Route>
                <Route path="/applicationform">{/*Application Form Component here */}</Route>
            </Routes>

        </div>
    </Router>
    )
}

export default App
