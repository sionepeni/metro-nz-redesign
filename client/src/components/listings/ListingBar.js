import "../../style/ListingBar.css"
import { useState } from "react"
import ListingError from "./ListingError"
import { buttonArray } from "./listings-component/ListingBtns"
import { icons } from "./listings-component/ListingIcons"

export default function ListingBar({ found, sortListings, splitContent }) {
    const [showMap, setShowMap] = useState(true)
    const [showDropDown, setShowDropDown] = useState(false)
    const [showChosenOption, setShowChosenOption] = useState("Sort by")

    const changeView = () => setShowMap(!showMap)
    const dropDown = () => setShowDropDown(!showDropDown)
    const closeOptions = () => setShowDropDown(!showDropDown)
    const handleOption = (e) => setShowChosenOption(e.target.id)

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
                            {icons[0].map2}
                            Show results on map
                        </button>
                    ) : (
                        <button
                            value="list"
                            onClickCapture={splitContent}
                            onClick={changeView}
                            className="btn-one"
                        >
                            {icons[0].list}
                            Show results as list
                        </button>
                    )}
                </div>
                <div
                    className={showMap ? "listings-bar-end" : "listings-hidden"}
                >
                    <button className="btn-two">
                        {icons[0].heart}
                        Save this Search
                    </button>
                    <button onClick={dropDown} className="btn-three">
                        {showChosenOption}
                        {showDropDown ? icons[0].up2 : icons[0].down2}
                    </button>
                </div>
                <div
                    className={
                        showDropDown
                            ? "listings-dropdown-show"
                            : "listings-hidden"
                    }
                >
                    {buttonArray
                        .filter((i) => i.sort)
                        .map((i) => (
                            <button
                                key={i.sort}
                                className="listings-menu-1"
                                value={i.value}
                                id={i.id}
                                onClickCapture={(e) => (
                                    closeOptions(), handleOption(e)
                                )}
                                onClick={sortListings}
                            >
                                {i.sort}
                            </button>
                        ))}
                </div>
            </div>
            {!found ? <ListingError /> : ""}
        </>
    )
}
