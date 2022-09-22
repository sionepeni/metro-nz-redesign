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
    HeartStraight,
    MapTrifold,
    List,
} from "phosphor-react"

const icons = [
    {
        up: <CaretUp className="caret-filter" size={20} />,
        up2: <CaretUp className="listings-up-icon" size={20} />,
        down: <CaretDown className="caret-filter" size={20} />,
        down2: <CaretDown className="listings-down-icon" size={20} />,
        map: <MapPin size={32} className="filter-location-icon" />,
        settings: (
            <SlidersHorizontal
                size={32}
                className="listings-filter-down-icon"
            />
        ),
        search: (
            <MagnifyingGlass
                className="listings-filter-search-icon"
                size={26}
                color="white"
            />
        ),
        dollar: <CurrencyCircleDollar className="dollar-sign" size={42} />,
        house: <House size={32} className="listings-filter-house-icon" />,
        bed: <Bed size={32} />,
        car: <Car size={32} />,
        chair: <Armchair size={32} />,
        bath: <Bathtub size={32} />,
        pet: <PawPrint size={32} />,
        filter: <CaretUp size={32} className="listings-filter-up-icon" />,
        heart: <HeartStraight className="listings-heart-icon" size={20} />,
        list: <List className="listings-list-icon" color="white" size={20} />,
        map2: <MapTrifold className="listings-map-icon" size={20} />,
    },
]

export { icons }
