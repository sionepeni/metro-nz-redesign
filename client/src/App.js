import "./App.css"
import Listings from "./pages/Listings"
import Home from "./pages/Home"
import Card from "./components/Card/Card"
import house from "./test/mock-data"
<<<<<<< HEAD
import PropertyFeature from "./pages/PropertyFeature"

=======
import {AppProvider} from "./context/AppContext"
>>>>>>> 37252c4d139316674dcc73ebbffe5324531a55f0
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
<<<<<<< HEAD
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={{/* Home Page component here */}}></Route>
                <Route path="/propertyfeature"element={<PropertyFeature/>}></Route>
                <Route path="/propertylisting" element={<Listings />}> </Route>
                <Route path="/booking" element={{/*Booking Page components here*/}}></Route>
                <Route path="/applicationform" element={{/*Application Form Component here */}}></Route>
            </Routes>
        </div>
    </Router>
=======
    <AppProvider>
        <Router>
            <div className="App">
                    <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/propertyfeauture"element={{/* Feature Page component here */}}></Route>
                    <Route path="/propertylisting" element={<Listings />}> </Route>
                    <Route path="/booking" element={{/*Booking Page components here*/}}></Route>
                    <Route path="/applicationform" element={{/*Application Form Component here */}}></Route>
                </Routes>
            </div>
        </Router>
    </AppProvider>

>>>>>>> 37252c4d139316674dcc73ebbffe5324531a55f0
    )
}

export default App
