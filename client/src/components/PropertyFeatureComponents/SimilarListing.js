import Card from "../Card/Card";
import '../../style/FeaturePageStyles/similarListingStyle.css';
import { House } from "phosphor-react";
import { useState } from "react";
import { useEffect } from "react";

export default function SimilarListing() {
    const [allListings, setAllListing] = useState([])
    const [listings, setListing] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [numberOfPages, setNumberOfPages] = useState(0)
    const [searchRequest, setSearchRequest] = useState(true)
    const [queryToBeSent, setQueryToBeSent] = useState([])

    useEffect(() => {
        const fetchListings = () => {
            try {
                fetch(
                    `http://localhost:5000/listings/?page=${currentPage}${queryToBeSent}`
                )
                    .then((response) => response.json())
                    .then(({ totalPages, listings, allListings }) => {
                        setListing(listings)
                        setNumberOfPages(totalPages)
                        setAllListing(allListings)
                    })
            } catch (err) {
                console.log(err)
            }
        }
        fetchListings()
        
    }, [searchRequest, currentPage])
    
    
    return(
        <div className="Card-Container">
          <div className="Card-Body">
            {listings.slice(0, 4).map((i) => (
                <Card item={i} key={i.id} />
            ))}
          </div>

        </div>
    )
}