import "./App.css"
import Card from "./components/Card/Card"
import house from "./test/mock-data"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    console.log(house)
    return (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/">{/* Home Page component here */}</Route>
                <Route path="/propertyfeauture">{/* Feature Page component here */}</Route>
                <Route path="/propertylisting"> {/*Property Listing Page/s component here*/}</Route>
                <Route path="/booking">{/*Booking Page components here*/}</Route>
                <Route path="/applicationform">{/*Application Form Component here */}</Route>
            </Switch>
            {house.map((i) => (
                <Card item={i} key={i.id} />
            ))}
        </div>
    </Router>
    )
}

export default App
