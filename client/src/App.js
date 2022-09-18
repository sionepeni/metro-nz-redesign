import "./App.css"
import Card from "./components/Card/Card"
import house from "./test/mock-data"

function App() {
    console.log(house)
    return (
        <div className="App">
            {house.map((i) => (
                <Card item={i} key={i.address} />
            ))}
        </div>
    )
}

export default App
