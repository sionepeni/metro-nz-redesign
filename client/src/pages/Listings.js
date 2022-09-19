import { useState, useEffect } from "react"
import axios from "axios"
import Card from "../components/Card/Card"

export default function Listings() {
    const [listings, setListing] = useState([])

    console.log(listings)

    const test = async () => {
        await axios.get("http://localhost:5000/listings/").then((res) => {
            setListing(res.data)
        })
    }

    return (
        <>
            <div>Hello</div>
            {listings.map((i) => (
                <Card item={i} key={i.address} />
            ))}
            <button onClick={test}>testing pull</button>
        </>
    )
}
