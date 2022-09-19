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
                <Route path="/" element={{/* Home Page component here */}}></Route>
                <Route path="/propertyfeauture"element={{/* Feature Page component here */}}></Route>
                <Route path="/propertylisting" element={<Listings />}> </Route>
                <Route path="/booking" element={{/*Booking Page components here*/}}></Route>
                <Route path="/applicationform" element={{/*Application Form Component here */}}></Route>
            </Routes>
        </div>
    </Router>
    )
}

export default App
