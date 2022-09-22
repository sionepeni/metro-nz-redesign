import "../style/Listings.css"
import { useState, useEffect } from "react"
import Header from "../components/header/Header"
import ListingFilter from "../components/listings/ListingFilter"
import ListingBar from "../components/listings/ListingBar"
import Card from "../components/Card/Card"
import Footer from "../components/footer/Footer"
import Map from "../components/Map"
import { CaretLeft, CaretRight } from "phosphor-react"

export default function Listings() {
    const [allListings, setAllListing] = useState([])
    const [listings, setListing] = useState([])
    const [numberOfPages, setNumberOfPages] = useState(0)

    const [currentPage, setCurrentPage] = useState(0)

    const [disablePreviousBtn, setDisablePreviousBtn] = useState(true)
    const [disableNextBtn, setDisableNextBtn] = useState(false)

    const [showMap, setShowMap] = useState("list")

    const [propertySortBy, setPropertySortBy] = useState("")
    const [propertyTypeBy, setPropertyTypeBy] = useState("")
    const [numberOfBeds, setNumberOfBeds] = useState("")
    const [numberOfCars, setNumberOfCars] = useState("")
    const [numberOfBaths, setNumberOfBaths] = useState("")
    const [petStatus, setPetStatus] = useState("")
    const [furnishStatus, setFurnishStatus] = useState("")
    const [searchRequest, setSearchRequest] = useState(true)
    const [queryToBeSent, setQueryToBeSent] = useState([])
    const [customQuery, setCustomQuery] = useState("")

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
        checkBtns()
        setCustomQuery("")
        setQueryToBeSent([])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchRequest, currentPage])

    const pages = new Array(numberOfPages).fill(null).map((v, i) => i)

    const prevPage = () => {
        currentPage === 0
            ? setDisablePreviousBtn(true)
            : setCurrentPage(currentPage - 1)
    }

    const nextPage = () => {
        currentPage === numberOfPages - 1
            ? setDisableNextBtn(true)
            : setCurrentPage(currentPage + 1)
    }

    const checkBtns = () => {
        currentPage === 0
            ? setDisablePreviousBtn(true)
            : setDisablePreviousBtn(false)
        currentPage === numberOfPages - 1
            ? setDisableNextBtn(true)
            : setDisableNextBtn(false)
    }

    const sortListings = (e) => setPropertySortBy(`&sort=${e.target.value}`)
    const splitContent = (e) => setShowMap(e.target.value)

    const propertyType = (e) => setPropertyTypeBy(`&type[in]=${e.target.value}`)
    const handleCars = (e) => setNumberOfCars(`&parking[in]=${e.target.value}`)
    const handleBeds = (e) => setNumberOfBeds(`&bedroom[in]=${e.target.value}`)
    const handleFurnish = (e) =>
        setFurnishStatus(`&furnish[in]=${e.target.value}`)
    const handleBaths = (e) =>
        setNumberOfBaths(`&bathroom[in]=${e.target.value}`)
    const handlePets = (e) => setPetStatus(`&pet[in]=${e.target.value}`)

    const searchQuery = (e) => setCustomQuery(`&text[search]=${e.target.value}`)

    const toggleSearch = () => {
        setQueryToBeSent(
            `${customQuery}${propertySortBy}${numberOfBeds}${numberOfCars}${numberOfBaths}${petStatus}${furnishStatus}${propertyTypeBy}`
        )
        setSearchRequest(!searchRequest)
    }

    return (
        <>
            <Header />

            <div className="listings-page">
                <h1>Discover your new rental home</h1>

                <div className="listings-page-filter">
                    <h2>What are you looking for in a home?</h2>
                    <ListingFilter
                        propertyType={propertyType}
                        bedrooms={handleBeds}
                        carparks={handleCars}
                        furnishings={handleFurnish}
                        bathrooms={handleBaths}
                        pets={handlePets}
                        searchNow={toggleSearch}
                        searchQuery={searchQuery}
                    />
                </div>

                <ListingBar
                    found={allListings}
                    sortListings={sortListings}
                    splitContent={splitContent}
                />

                <div className="content-split">
                    <div
                        className={
                            showMap === "list"
                                ? "listings-page-content"
                                : "content-split-first"
                        }
                    >
                        {listings.map((i) => (
                            <Card item={i} key={i._id} />
                        ))}
                    </div>
                    <div
                        className={
                            showMap === "list"
                                ? "hide-listings-map"
                                : "content-split-second"
                        }
                    >
                        <Map />
                    </div>
                </div>

                <div className="listings-page-pagination">
                    <button
                        className={disablePreviousBtn ? "disabled-btn" : ""}
                        onClick={prevPage}
                        disabled={disablePreviousBtn ? true : false}
                    >
                        <CaretLeft size={15} />
                    </button>

                    {pages.map((pageIndex, index) => (
                        <button
                            key={pageIndex}
                            onClickCapture={() => setCurrentPage(pageIndex)}
                        >
                            {pageIndex + 1}
                        </button>
                    ))}

                    <button
                        className={
                            disableNextBtn === true ? "disabled-btn" : ""
                        }
                        onClick={nextPage}
                        disabled={disableNextBtn ? true : false}
                    >
                        <CaretRight size={15} />
                    </button>
                </div>
            </div>

            <Footer />
        </>
    )
}
