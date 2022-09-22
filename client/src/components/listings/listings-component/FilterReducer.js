export const INITIAL_STATE = {
    showFilters: false,
    showPropertyType: false,
    bedroom: "",
    parking: "",
    bathroom: "",
    pet: "",
    furnish: "",
    type: "Property type",
    animation: false,
}

export const filterReducer = (state, action) => {
    switch (action.type) {
        case "BTN_SELECT":
            return {
                ...state,
                [action.payload.id]: action.payload.value,
            }
        case "CLOSE_OPENED_BTNS":
            return
        default:
            return state
    }
}
