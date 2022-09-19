import { useState } from "react"
import axios from "axios"
import Card from "../components/Card/Card"
import ListingFilter from "../components/listings/ListingFilter"

export default function Listings() {
    const [listings, setListing] = useState([])

    const test = async () => {
        await axios.get("http://localhost:5000/listings/").then((res) => {
            setListing(res.data)
        })
    }

    console.log(listings)

    return (
        <>
            <div>Hello</div>
            <ListingFilter />
            <button onClick={test}>testing pull</button>
            {listings.map((i) => (
                <Card item={i} key={i.address} />
            ))}
        </>
    )
}
