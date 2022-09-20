import "../../style/ListingBar.css"
import { useState } from "react"
import ListingError from "./ListingError"
import {
    HeartStraight,
    CaretUp,
    CaretDown,
    MapTrifold,
    List,
} from "phosphor-react"

export default function ListingBar({ found, sortListings }) {
    const [hide, setHide] = useState(true)
    const [showDropDown, setShowDropDown] = useState(false)

    const test = () => setHide(!hide)
    const dropDown = () => setShowDropDown(!showDropDown)
    const closeOptions = () => setShowDropDown(!showDropDown)

    return (
        <>
            <div className="listings-bar">
                <p>
                    We found {found} properties for rent that match your
                    criteria
                </p>
                <div className="listings-bar-mid">
                    <button onClick={test} className="btn-one">
                        {hide ? (
                            <MapTrifold
                                className="listings-map-icon"
                                size={20}
                            />
                        ) : (
                            <List
                                className="listings-list-icon"
                                color="white"
                                size={20}
                            />
                        )}
                        {hide ? "Show results on map" : "Show results as list"}
                    </button>
                </div>
                <div className="listings-bar-end">
                    <button className="btn-two">
                        <HeartStraight
                            className="listings-heart-icon"
                            size={20}
                        />
                        Save this Search
                    </button>
                    <button onClick={dropDown} className="btn-three">
                        Sort by
                        {showDropDown ? (
                            <CaretUp className="listings-up-icon" size={20} />
                        ) : (
                            <CaretDown
                                className="listings-down-icon"
                                size={20}
                            />
                        )}
                    </button>
                </div>
                <div
                    className={
                        showDropDown
                            ? "listings-dropdown-show"
                            : "listings-dropdown-hidden"
                    }
                >
                    <button
                        onClickCapture={closeOptions}
                        className="listings-menu-1"
                    >
                        Newest
                    </button>
                    <button onClickCapture={closeOptions}>Oldest</button>
                    <button
                        onClickCapture={closeOptions}
                        onClick={sortListings}
                        value="expensive"
                    >
                        Highest price
                    </button>
                    <button
                        onClickCapture={closeOptions}
                        onClick={sortListings}
                        value="cheapest"
                        className="listings-menu-4"
                    >
                        Lowest price
                    </button>
                </div>
            </div>
            {found === 0 ? <ListingError /> : ""}
        </>
    )
}
