import { icons } from "./ListingIcons"

let splitContent
let changeView

const barBtns = [
    {
        map: (
            <button
                value="map"
                onClickCapture={splitContent}
                onClick={changeView}
                className="btn-one"
            >
                {icons[0].map2}
                Show results on map
            </button>
        ),
    },
    {
        name: "bar",
        value: "list",
        class: "btn-one",
        icon: icons[0].list,
        text: "Show results as list",
    },
]

export { barBtns }
