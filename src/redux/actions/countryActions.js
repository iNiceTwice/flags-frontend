import axios from "axios"

export const countryAll = (page) => {
    return async (dispatch) => {
        dispatch(countryError(false))
        dispatch(countryLoading(true))
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all")
            const data = response.data.slice((page*8)-8,page*8)
            dispatch(countryLength(response.data.length))
            dispatch(countryData(data))
            dispatch(countryLoading(false))
        } catch (error) {
            dispatch(countryError(true))
        }
    }
}
export const countrySearch = (country,region,page) => {
    return async (dispatch) => {
        dispatch(countryLoading(true))
        dispatch(countryError(false))
        try {
            if(region && country){
                const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
                const result = response.data.filter(country => country.region === region)      
                const data = result.slice((page*8)-8,page*8)
                dispatch(countryLength(result.length))
                dispatch(countryData(data))
                dispatch(countryLoading(false)) 
            }else if(!region && country){
                if(page){  //if page is null it means the function is called from country page, it just needs the country partial name
                    const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
                    const data = response.data.slice((page*8)-8,page*8)
                    dispatch(countryLength(response.data.length))
                    dispatch(countryData(data))    
                }
                const response = await axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
                dispatch(countryData(response.data))
                dispatch(countryLoading(false)) 
            }else if( region && !country){
                const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
                const data = response.data.slice((page*8)-8,page*8)
                dispatch(countryLength(response.data.length))
                dispatch(countryData(data))
                dispatch(countryLoading(false))     
            }
        } catch (error) {
            dispatch(countryLoading(false))
            dispatch(countryError(true))
        }    
    }
}

const countryData = (countries) => ({
    type: "set/countries",
    payload:countries
})
const countryLength = (length) => ({
    type:"set/length",
    payload:length
})
const countryError = (isError) => ({
    type: "error/countries",
    payload:isError
})
const countryLoading = (isLoading) => ({
    type:"loading/countries",
    payload:isLoading
})