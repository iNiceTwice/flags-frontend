import { combineReducers } from "redux"
import themeReducer from "./themeReducer"
import countryReducer from "./countryReducer"

export default combineReducers({
    theme: themeReducer,
    countries:countryReducer
})


