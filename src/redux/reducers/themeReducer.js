
const initialState = {
    nightMode:false
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "theme/dark":
            return {
                ...state,
                nightMode:action.payload
            }
        case "theme/light":
            return {
                ...state,
                nightMode:action.payload
            }
        default:
            return state
    }
}

export default themeReducer