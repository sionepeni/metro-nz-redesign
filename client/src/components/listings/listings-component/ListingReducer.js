export const INITIAL_STATE = {
    allListings: [],
    listings: [],
    queryToBeSent: [],
    currentPage: 0,
    numberOfPages: 0,
    disablePreviousBtn: true,
    searchRequest: true,
    disableNextBtn: false,
    propertySortBy: "",
    numberOfBeds: "",
    numberOfCars: "",
    numberOfBaths: "",
    petStatus: "",
    furnishStatus: "",
    customQuery: "",
    filterOptions: "",
    showMap: "list",
}

export const listingReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {}
        case "UPDATE_PAGE":
            return {}
        case "CHANGE_OPTION":
            return {
                [action.payload
                    .name]: `&${action.payload.id}[in]=${action.payload.value}`,
            }
        case "SORT":
            return {
                propertySortBy: `&sort=${action.payload}`,
            }
        case "CREATE_QUERY":
            return {
                queryToBeSent: [
                    ...state.queryToBeSent,
                    state.propertyTypeBy,
                    state.numberOfBeds,
                    state.numberOfCars,
                    state.numberOfBaths,
                    state.petStatus,
                    state.furnishStatus,
                    state.propertySortBy,
                ],
                searchRequest: !state.searchRequest,
            }
        case "USER_INPUT":
            return {
                customQuery: `&${action.payload.id}[search]=${action.payload.value}`,
            }
        default:
            return state
    }
}
