import "./App.css"
import Listings from "./pages/Listings"
import Home from "./pages/Home"
import Card from "./components/Card/Card"
import house from "./test/mock-data"
import PropertyFeature from "./pages/PropertyFeature"
import {AppProvider} from "./context/AppContext"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <AppProvider>
            <Router>
                <div className="App">
                    <Routes>
<<<<<<< HEAD
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/propertyfeature"element={<PropertyFeature />}></Route>
                    <Route path="/propertylisting" element={<Listings />}> </Route>
                    <Route path="/booking" element={{/*Booking Page components here*/}}></Route>
                    <Route path="/applicationform" element={{/*Application Form Component here */}}></Route>
                </Routes>
            </div>
        </Router>
    </AppProvider>


=======
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="/propertyfeauture"
                            element={
                                {
                                    /* Feature Page component here */
                                }
                            }
                        ></Route>
                        <Route path="/propertylisting" element={<Listings />}>
                            {" "}
                        </Route>
                        <Route
                            path="/booking"
                            element={
                                {
                                    /*Booking Page components here*/
                                }
                            }
                        ></Route>
                        <Route
                            path="/applicationform"
                            element={
                                {
                                    /*Application Form Component here */
                                }
                            }
                        ></Route>
                    </Routes>
                </div>
            </Router>
        </AppProvider>
>>>>>>> 5bb7fe38b7a1f933e7579cef02658590d189816e
    )
}

export default App
