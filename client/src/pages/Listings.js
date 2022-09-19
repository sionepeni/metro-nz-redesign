import "../style/Listings.css"
import { useState } from "react"
import axios from "axios"
import Card from "../components/Card/Card"
import ListingFilter from "../components/listings/ListingFilter"
import ListingError from "../components/listings/ListingError"

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
            <div className="listings-page">
                <h1>Discover your new rental home</h1>
                <div className="listings-page-filter">
                    <h2>What are you looking for in a home?</h2>
                    <ListingFilter />
                </div>
                <ListingError />
                <button onClick={test}>testing pull</button>
                {listings.map((i) => (
                    <Card item={i} key={i.address} />
                ))}
            </div>
        </>
    )
}
