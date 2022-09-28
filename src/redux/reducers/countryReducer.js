
const initialState = {
    countries:[],
    countriesTotal:null,
    isError:null,
    loading:null
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "set/countries":
            return {
                ...state,
                countries:action.payload
            }
        case "set/length":
            return {
                ...state,
                countriesTotal:action.payload
            }
        case "loading/countries":
            return {
                ...state,
                loading:action.payload
            }
        case "error/countries":
            return {
                ...state,
                isError:action.payload
            }
        default:
            return state
    }
}

export default countryReducer 