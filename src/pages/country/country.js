import "./country.scoped.css"
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, Typography, CircularProgress } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { countrySearch } from '../../redux/actions/countryActions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios"

const Borders = ({borders}) => {
    
    const [country, setCountry] = useState([])
    
    useEffect(()=>{
        const getBorders = () => {
            axios.get(`https://restcountries.com/v3.1/alpha?codes=${borders}`)
                .then(data => setCountry(data.data))
                .catch(error => console.log(error)) 
        }
        getBorders()
    },[borders])

    return(
        <>
            <Box className="buttonContainer">
                {
                    country.length > 0 && country.map(border=>(
                        <Link to={`/${border?.name?.common}`} key={border?.name?.common}>
                            <Button sx={{mr:"1rem",my:"0.5rem"}} size="small" variant="contained">{border?.name?.common}</Button>
                        </Link>
                    ))
                } 
            </Box>
        </>
    )
}

const Country = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    const loading = useSelector(state => state.countries.loading)
    const isError = useSelector(state => state.countries.isError)
    const country = useSelector(state => {
        const c = state?.countries?.countries?.filter(country=>country.name.common === params.country)
        return c[0]
    })
    useEffect(() => {
        if(isError){
            navigate("/error/404") 
            return
        } 
        dispatch(countrySearch(params.country))
    },[params.country,dispatch,isError])   

    return (
        <>
            <Box sx={{minHeight:"calc(100vh)", bgcolor:"background.default"}}>
                <NavBar/>
                {
                    loading  
                    ? <CircularProgress sx={{position:"absolute", top:"50%", left:"50%"}} color="success" /> 
                    : <Grid sx={{display:{xs:"block", lg:"flex"}}} container>
                        <Grid className="center" item md={12} lg={6}>
                            <Box>
                                <Box sx={{ my:"4rem"}}>
                                    <Button onClick={() => navigate("/", { replace:true })} sx={{px:"2rem"}} startIcon={<ArrowBackIcon/>} variant="contained"> Back</Button>
                                </Box>
                                <Paper elevation={0} sx={{p:2}}>
                                    <img className="flag-image" loading="lazy" alt={country?.name?.common} src={country?.flags?.svg}/>
                                </Paper>
                            
                            </Box>
                        </Grid>    
                        <Grid item md={12} lg={6}>
                            {
                                country &&    
                                <Box className="center" sx={{mt:{md:"6rem", xs:"2rem"}, height:"100%"}}>
                                    <div>
                                        <Box sx={{width:"100%", px:"2rem"}}>
                                            <Typography variant="h5" color="textPrimary" sx={{fontWeight:"800"}}>{country.name.common}</Typography>
                                        </Box>
                                        <Box sx={{display:"flex", flexDirection:{lg:"row", md:"column", xs:"column"}}}>    
                                            <Box className="countryInfo" sx={{p:"2rem", color:"text.primary"}}>
                                                <div>
                                                    <span><b>Native Name: </b></span>
                                                    <span>{country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</span>
                                                </div>
                                                <div>
                                                    <span><b>Population: </b></span>
                                                    <span>{country.population}</span>
                                                </div>
                                                <div>
                                                    <span><b>Region: </b></span>
                                                    <span>{country.region}</span>
                                                </div>
                                                <div>
                                                    <span><b>Sub Region: </b></span>
                                                    <span>{country.subregion}</span>
                                                </div>
                                                <div>
                                                    <span><b>Capital: </b></span>
                                                    <span>{country.capital[0]}</span>
                                                </div>
                                            </Box>
                                            <Box className="countryInfo" sx={{p:"2rem",color:"text.primary"}}>
                                                <div>
                                                    <span><b>Top level Domain: </b></span>
                                                    <span>{country.tld[0]}</span>
                                                </div>
                                                <div>
                                                    <span><b>Currencies: </b></span>
                                                    <span>{country.currencies[Object.keys(country.currencies)[0]].name}</span>
                                                </div>
                                                <div>
                                                    <span><b>Languages: </b></span>
                                                    {
                                                        Object.values(country.languages).map((language, index) => (
                                                            Object.keys(country.languages).length === index + 1  
                                                            ? <span key={language}>{language}</span> : <span key={language}>{language}, </span>
                                                    ))}
                                                </div>            
                                            </Box>
                                        </Box>
                                        <Box sx={{color:"text.primary"}} className="bordersContainer">
                                            <b>Borders: </b>
                                            { 
                                                !country.borders ? 
                                                <p>No borders</p> :
                                                <Borders borders={country?.borders}/>
                                            }
                                        </Box>
                                    </div>
                                </Box>
                            }
                        </Grid>    
                    </Grid>    
                }
            </Box>
        </>
    )
}

export default Country