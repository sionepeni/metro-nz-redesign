/* eslint-disable no-sequences */
import "../../style/ListingFilter.css"
import { useState } from "react"
import { buttonArray } from "./listings-component/ListingBtns"
import { icons } from "./listings-component/ListingIcons"

import FilterOptions from "./FilterOptions"

export default function ListingFilter({
    propertyType,
    searchQuery,
    bedrooms,
    carparks,
    furnishings,
    bathrooms,
    pets,
    searchNow,
}) {
    const [showFilters, setShowFilters] = useState(false)
    const [showPropertyType, setShowPropertyType] = useState(false)
    const [houseType, setHouseType] = useState("Property type")
    const [animation, setAnimation] = useState(false)

    const handleFilters = () => setShowFilters(!showFilters)
    const handlePropertyType = () => setShowPropertyType(!showPropertyType)

    const closeOptions = (e) => {
        setShowPropertyType(false)
        setShowFilters(false)
    }

    const handleHouseType = (e) => setHouseType(e.target.value)

    const toggleAnimate = () => {
        setAnimation(true)

        // Buttons stops to shake after 2 seconds
        setTimeout(() => setAnimation(false), 100)
    }

    return (
        <>
            <div className="listings-filter">
                <span className="listings-filter-main">
                    <button
                        onClick={handlePropertyType}
                        className="listings-filter-button house-btn"
                    >
                        {icons[0].house} &nbsp;{houseType}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        {showPropertyType ? icons[0].up : icons[0].down}
                    </button>
                    <div
                        className={
                            showPropertyType
                                ? "property-options-show"
                                : "property-options-hidden"
                        }
                    >
                        {buttonArray
                            .filter((i) => i.house)
                            .map((btn, index) => (
                                <button
                                    id="type"
                                    name="propertyType"
                                    key={index}
                                    className={
                                        btn.value === propertyType
                                            ? "property-selected"
                                            : ""
                                    }
                                    onClickCapture={propertyType}
                                    onClick={(e) => (
                                        handleHouseType(e), closeOptions(e)
                                    )}
                                    value={btn.value}
                                >
                                    {btn.house}
                                </button>
                            ))}
                    </div>

                    <span className="listings-filter-location-icon">
                        {icons[0].map}
                        <input
                            name="customQuery"
                            id="text"
                            onChange={searchQuery}
                            type="text"
                            className="listings-filter-input"
                            placeholder="Search by location or
                        Property ID..."
                        ></input>
                    </span>

                    <button
                        className="listings-filter-button weighted-font filter-trigger filter-btn"
                        onClick={handleFilters}
                    >
                        {showFilters ? icons[0].filter : icons[0].settings}{" "}
                        &nbsp;Filters
                    </button>

                    <button
                        name="searchRequest"
                        onClick={searchNow}
                        onClickCapture={(e) => (
                            closeOptions(e), toggleAnimate()
                        )}
                        className={
                            animation
                                ? "listings-filter-button colored-btn weighted-font btn-end animate-search"
                                : "listings-filter-button colored-btn weighted-font btn-end"
                        }
                    >
                        {icons[0].search} &nbsp;Search Now
                    </button>
                </span>

                <div>
                    {showFilters ? (
                        <FilterOptions
                            bedrooms={bedrooms}
                            carparks={carparks}
                            furnishings={furnishings}
                            bathrooms={bathrooms}
                            pets={pets}
                            option1={true}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    )
}
