/* eslint-disable no-sequences */
import "../../style/ListingFilter.css"
import { useState, useReducer } from "react"
import { buttonArray } from "./listings-component/ListingBtns"
import { icons } from "./listings-component/ListingIcons"
import graph from "./assets/graph.png"
import {
    INITIAL_STATE,
    filterReducer,
} from "./listings-component/FilterReducer"

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
    const [state, dispatch] = useReducer(filterReducer, INITIAL_STATE)

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

    const btnSelector = (e) => {
        dispatch({
            type: "BTN_SELECT",
            payload: {
                id: e.target.id,
                value: e.target.value,
            },
        })
    }

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
                                        btn.value === state.type
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

                <div
                    className={
                        showFilters
                            ? "listings-filter-option-show"
                            : "listings-filter-option-hide"
                    }
                >
                    <div className="listings-filter-set-0">
                        <div className="listings-filter-price">
                            <div>
                                {icons[0].dollar}
                                &nbsp;<p>PRICE</p>
                                <img src={graph} width={300} alt="graph" />
                            </div>
                            <button>$ min</button>----&nbsp;{" "}
                            <button>$ max</button>
                        </div>
                    </div>

                    <div className="listings-filter-set-1">
                        <span className="listings-filter-bedroom">
                            <div>{icons[0].bed} &nbsp;Bedrooms</div>
                            {buttonArray
                                .filter((i, index) => index < 5)
                                .map((btn, index) => (
                                    <button
                                        id="bedroom"
                                        name="numberOfBeds"
                                        key={index}
                                        className={
                                            btn.value === state.bedroom
                                                ? "selected-filter-btn"
                                                : ""
                                        }
                                        onClickCapture={bedrooms}
                                        onClick={(e) => btnSelector(e)}
                                        value={btn.value}
                                    >
                                        {btn.bed}
                                    </button>
                                ))}
                        </span>
                        <span className="listings-filter-carpark">
                            <div>{icons[0].car} &nbsp;Carparks</div>
                            {buttonArray
                                .filter((i, index) => index < 4)
                                .map((btn, index) => (
                                    <button
                                        id="parking"
                                        name="numberOfCars"
                                        key={index}
                                        className={
                                            btn.value === state.parking
                                                ? "selected-filter-btn"
                                                : ""
                                        }
                                        onClickCapture={carparks}
                                        onClick={(e) => btnSelector(e)}
                                        value={btn.value}
                                    >
                                        {btn.name}
                                    </button>
                                ))}
                        </span>
                        <span className="listings-filter-furnish">
                            <div>{icons[0].chair} &nbsp;Furnishings</div>
                            {buttonArray
                                .filter((i) => i.furnish)
                                .map((btn, index) => (
                                    <button
                                        id="furnish"
                                        name="furnishStatus"
                                        key={index}
                                        className={
                                            btn.value === state.furnish
                                                ? "selected-filter-btn"
                                                : ""
                                        }
                                        onClickCapture={furnishings}
                                        onClick={(e) => btnSelector(e)}
                                        value={btn.value}
                                    >
                                        {btn.furnish}
                                    </button>
                                ))}
                        </span>
                    </div>

                    <div className="listings-filter-set-2">
                        <span className="listings-filter-bathroom">
                            <div>{icons[0].bath} &nbsp;Bathrooms</div>
                            {buttonArray
                                .filter((i, index) => index < 4)
                                .map((btn, index) => (
                                    <button
                                        id="bathroom"
                                        name="numberOfBaths"
                                        key={index}
                                        className={
                                            btn.value === state.bathroom
                                                ? "selected-filter-btn"
                                                : ""
                                        }
                                        onClickCapture={bathrooms}
                                        onClick={(e) => btnSelector(e)}
                                        value={btn.value}
                                    >
                                        {btn.name}
                                    </button>
                                ))}
                        </span>
                        <span className="listings-filter-pet">
                            <div>{icons[0].pet} &nbsp;Pet Friendly</div>
                            {buttonArray
                                .filter((i) => i.pet)
                                .map((btn, index) => (
                                    <button
                                        id="pet"
                                        name="petStatus"
                                        key={index}
                                        className={
                                            btn.value === state.pet
                                                ? "selected-filter-btn"
                                                : ""
                                        }
                                        onClickCapture={pets}
                                        onClick={(e) => btnSelector(e)}
                                        value={btn.value}
                                    >
                                        {btn.pet}
                                    </button>
                                ))}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
