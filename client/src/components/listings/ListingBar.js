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

export default function ListingBar({ found, sortListings, splitContent }) {
    const [showMap, setShowMap] = useState(true)
    const [showDropDown, setShowDropDown] = useState(false)

    const changeView = () => setShowMap(!showMap)
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
                    {showMap ? (
                        <button
                            value="map"
                            onClickCapture={splitContent}
                            onClick={changeView}
                            className="btn-one"
                        >
                            <MapTrifold
                                className="listings-map-icon"
                                size={20}
                            />
                            Show results on map
                        </button>
                    ) : (
                        <button
                            value="list"
                            onClickCapture={splitContent}
                            onClick={changeView}
                            className="btn-one"
                        >
                            <List
                                className="listings-list-icon"
                                color="white"
                                size={20}
                            />
                            Show results as list
                        </button>
                    )}
                </div>
                <div
                    className={showMap ? "listings-bar-end" : "listings-hidden"}
                >
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
                            : "listings-hidden"
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
                        value="dsc"
                    >
                        Highest price
                    </button>
                    <button
                        onClickCapture={closeOptions}
                        onClick={sortListings}
                        value="asc"
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
