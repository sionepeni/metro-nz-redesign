import "../../style/ListingFilter.css"
import { useState } from "react"
import {
    MapPin,
    PawPrint,
    Car,
    Bathtub,
    Bed,
    SlidersHorizontal,
    CaretUp,
    CaretDown,
    Armchair,
    MagnifyingGlass,
    House,
    CurrencyCircleDollar,
} from "phosphor-react"

export default function ListingFilter({ propertyType }) {
    const [showFilters, setShowFilters] = useState(false)
    const [showPropertyType, setShowPropertyType] = useState(false)
    const [showChosenProperty, setShowChosenProperty] =
        useState("Property type")

    const handleFilters = () => setShowFilters(!showFilters)
    const handlePropertyType = () => setShowPropertyType(!showPropertyType)
    const closeOptions = (e) => {
        setShowPropertyType(false)
        setShowChosenProperty(e.target.value)
    }

    return (
        <>
            <div className="listings-filter">
                <span className="listings-filter-main">
                    <button
                        onClick={handlePropertyType}
                        className="listings-filter-button house-btn"
                    >
                        <House
                            size={32}
                            className="listings-filter-house-icon"
                        />{" "}
                        &nbsp;{showChosenProperty}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        {showPropertyType ? (
                            <CaretUp className="caret-filter" size={20} />
                        ) : (
                            <CaretDown className="caret-filter" size={20} />
                        )}
                    </button>
                    <div
                        className={
                            showPropertyType
                                ? "property-options-show"
                                : "property-options-hidden"
                        }
                    >
                        <button
                            onClick={propertyType}
                            onClickCapture={closeOptions}
                            value="Apartment"
                            className="property-options-show-top"
                        >
                            Apartment
                        </button>
                        <button
                            onClick={propertyType}
                            onClickCapture={closeOptions}
                            value="House"
                        >
                            House
                        </button>
                        <button
                            onClick={propertyType}
                            onClickCapture={closeOptions}
                            value="Unit"
                        >
                            Unit
                        </button>
                        <button
                            onClick={propertyType}
                            onClickCapture={closeOptions}
                            value="Townhouse"
                        >
                            Townhouse
                        </button>
                        <button
                            onClick={propertyType}
                            onClickCapture={closeOptions}
                            value="Lifestyle"
                        >
                            Lifestyle property
                        </button>
                        <button
                            onClick={propertyType}
                            onClickCapture={closeOptions}
                            value="Section"
                            className="property-options-show-bottom"
                        >
                            Section
                        </button>
                    </div>

                    <span className="listings-filter-location-icon">
                        <MapPin size={32} className="filter-location-icon" />
                        <input
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
                        {showFilters ? (
                            <CaretUp
                                size={32}
                                className="listings-filter-up-icon"
                            />
                        ) : (
                            <SlidersHorizontal
                                size={32}
                                className="listings-filter-down-icon"
                            />
                        )}{" "}
                        &nbsp;Filters
                    </button>

                    <button className="listings-filter-button colored-btn weighted-font btn-end">
                        <MagnifyingGlass
                            className="listings-filter-search-icon"
                            size={26}
                            color="white"
                        />{" "}
                        &nbsp;Search Now
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
                        <span className="listings-filter-price">
                            <div>
                                <CurrencyCircleDollar size={32} />
                                &nbsp;PRICE
                            </div>
                            <button>$ min</button>- <button>$ max</button>
                        </span>
                    </div>

                    <div className="listings-filter-set-1">
                        <span className="listings-filter-bedroom">
                            <div>
                                <Bed size={32} /> &nbsp;Bedrooms
                            </div>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5+</button>
                        </span>
                        <span className="listings-filter-carpark">
                            <div>
                                <Car size={32} /> &nbsp;Carparks
                            </div>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4+</button>
                        </span>
                        <span className="listings-filter-furnish">
                            <div>
                                <Armchair size={32} /> &nbsp;Furnishings
                            </div>
                            <button>Not furnished</button>
                            <button>Part furnished</button>
                            <button>Furnished</button>
                        </span>
                    </div>

                    <div className="listings-filter-set-2">
                        <span className="listings-filter-bathroom">
                            <div>
                                <Bathtub size={32} /> &nbsp;Bathrooms
                            </div>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4+</button>
                        </span>
                        <span className="listings-filter-pet">
                            <div>
                                <PawPrint size={32} /> &nbsp;Pet Friendly
                            </div>
                            <button>Yes</button>
                            <button>No</button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
