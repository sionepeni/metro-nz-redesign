import "./App.css"
import Card from "./components/Card/Card"
import house from "./test/mock-data"

function App() {
    console.log(house)
    return (
        <div className="App">
            {house.map((i, idx) => (
                <Card item={i} key={idx} />
            ))}
        </div>
    )
}

export default App
