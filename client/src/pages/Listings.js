import "../style/Listings.css"
import { useState, useEffect } from "react"
import Header from "../components/header/Header"
import ListingFilter from "../components/listings/ListingFilter"
import ListingBar from "../components/listings/ListingBar"
import Card from "../components/Card/Card"
import Footer from "../components/footer/Footer"
import mapImg from "../components/listings/assets/Basemap image.png"
import { CaretLeft, CaretRight } from "phosphor-react"

export default function Listings() {
    const [allListings, setAllListing] = useState([])
    const [listings, setListing] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [numberOfPages, setNumberOfPages] = useState(0)
    const [disablePreviousBtn, setDisablePreviousBtn] = useState(true)
    const [disableNextBtn, setDisableNextBtn] = useState(false)
    const [propertySortBy, setPropertySortBy] = useState("view")
    const [propertyTypeBy, setPropertyTypeBy] = useState("")
    const [showMap, setShowMap] = useState("list")

    useEffect(() => {
        fetch(
            `http://localhost:5000/listings/${propertySortBy}?page=${currentPage}`
        )
            .then((response) => response.json())
            .then(({ totalPages, listings, allListings }) => {
                setListing(listings)
                setNumberOfPages(totalPages)
                setAllListing(allListings)
            })
        checkBtns()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, propertySortBy, propertyTypeBy, allListings])

    const fetchListingByType = () => {
        fetch(
            `http://localhost:5000/listings/properties?page=${currentPage}&type=${propertyTypeBy}`
        )
            .then((response) => response.json())
            .then(({ totalPages, listings, allListings }) => {
                setListing(listings)
                setNumberOfPages(totalPages)
                setAllListing(allListings)
            })
    }

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

    const sortListings = (e) => setPropertySortBy(e.target.value)

    const propertyType = (e) => {
        setPropertyTypeBy(e.target.value)
        fetchListingByType()
    }

    const splitContent = (e) => setShowMap(e.target.value)

    return (
        <>
            <Header />

            <div className="listings-page">
                <h1>Discover your new rental home</h1>
                <div className="listings-page-filter">
                    <h2>What are you looking for in a home?</h2>
                    <ListingFilter propertyType={propertyType} />
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
                        {listings.map((i, idx) => (
                            <Card item={i} key={idx} />
                        ))}
                    </div>
                    <div
                        className={
                            showMap === "list"
                                ? "hide-listings-map"
                                : "content-split-second"
                        }
                    >
                        <img
                            src={mapImg}
                            alt="map"
                            width={1500}
                            height={2500}
                        />
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

                    {pages.map((pageIndex) => (
                        <button
                            key={pageIndex}
                            onClick={() => setCurrentPage(pageIndex)}
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
