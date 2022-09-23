import { useReducer } from "react"
import { buttonArray } from "./listings-component/ListingBtns"
import { icons } from "./listings-component/ListingIcons"
import graph from "./assets/graph.png"
import {
    INITIAL_STATE,
    filterReducer,
} from "./listings-component/FilterReducer"

export default function FilterOptions({
    bedrooms,
    carparks,
    furnishings,
    bathrooms,
    pets,
    option1,
}) {
    const [state, dispatch] = useReducer(filterReducer, INITIAL_STATE)

    const btnSelector = (e) => {
        dispatch({
            type: "BTN_SELECT",
            payload: {
                id: e.target.id,
                value: e.target.value,
            },
        })
    }

    return (
        <>
            <div
                className={
                    option1 ? "listings-filter-option-show" : "filter-show-set"
                }
            >
                <div className="listings-filter-set-0">
                    <div className="listings-filter-price">
                        <div>
                            {icons[0].dollar}
                            &nbsp;<p>PRICE</p>
                            <img src={graph} width={300} alt="graph" />
                        </div>
                        <button>$ min</button>----&nbsp; <button>$ max</button>
                    </div>
                </div>

                <div className="listings-filter-set-1">
                    <span
                        className={
                            option1
                                ? "listings-filter-bedroom"
                                : "filter-set-bed"
                        }
                    >
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
                    <span
                        className={
                            option1
                                ? "listings-filter-carpark"
                                : "filter-set-car"
                        }
                    >
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
                    <span
                        className={
                            option1 === true
                                ? "listings-filter-furnish"
                                : "listings-filter-option-hide"
                        }
                    >
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
        </>
    )
}
