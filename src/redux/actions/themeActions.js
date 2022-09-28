
export const themeActions = (boolean) => {
    return (dispatch) => {
        if (boolean){
            dispatch(setNightMode(boolean))    
        }else{
            dispatch(setLightMode(boolean))
        }
    }
}

const setNightMode = (boolean) => ({
    type:"theme/dark",
    payload:boolean
})
const setLightMode = (boolean) => ({
    type:"theme/light",
    payload:boolean
})