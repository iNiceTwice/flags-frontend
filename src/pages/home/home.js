import { Box, Grid, InputBase, Select, MenuItem, FormControl, InputLabel, Pagination, Stack, Typography } from '@mui/material'
import { countryAll, countrySearch } from '../../redux/actions/countryActions';
import CountryItem from '../../components/CountryItem/CountryItem'
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import NavBar from '../../components/NavBar/NavBar'
import React, { useState, useEffect } from 'react';
import ContentLoader from "react-content-loader"
import debounce from "lodash.debounce"
import "./home.scoped.css"

const Home = () => {
  
  const regions = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania"
  ]

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries.countries)
  const loading = useSelector(state => state.countries.loading)
  const isError = useSelector(state => state.countries.isError)
  const countriesTotal = useSelector(state => state.countries.countriesTotal)
  const [ search, setSearch ] = useState("")
  const [ region, setRegion ] = useState("")
  const [ page, setPage ] = useState(1)

  const handleChangeSearch = debounce((e) => {
    setSearch(e.target.value.toLowerCase().trim())
  },300)

  const handleChangeSelect = (e) => {
    setRegion(e.target.value)
    setPage(1)
  }
 
  useEffect(()=>{
    if(!search && !region){
      dispatch(countryAll(page))
    }else{
      dispatch(countrySearch(search,region,page))
    }
  },[ dispatch, page, search, region ])

  return (
    <Box sx={{minHeight:"calc(100vh)", bgcolor:"background.default"}}>
      <NavBar/>
      <div className="container">
        <Grid container spacing={2} sx={{mb:"3rem"}}>
          <Grid className="gridItem" item xs={12} md={12} lg={6}>
            <FormControl>
              <InputBase
                onChange={handleChangeSearch}
                
                className="searchInput"
                sx={{bgcolor:"background.paper" }} 
                placeholder="Search for a country..."
                startAdornment={<SearchIcon sx={{mx:"1rem"}}/>} 
              />
            </FormControl>
          </Grid>
          <Grid className="gridItem" sx={{alignItems:"flex-start"}} item xs={12} md={12} lg={6}>
            <FormControl>
              <InputLabel sx={{ml:"1rem"}}>Filter by region</InputLabel>
              <Select 
                sx={{bgcolor:"background.paper"}}
                className="searchInput"
                onChange={handleChangeSelect}
                value={region}
                input={<InputBase/>}
              >
                {
                  regions.map((region)=>(
                    <MenuItem value={region} key={region}>
                      {region}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="space-evenly">
          {
            loading ?
            Array(8).fill().map((_,index)=>(
              <Grid className="gridItem" key={index} item xs={12} sm={12} md={6} lg={4} xl={3} >
                <ContentLoader 
                  speed={2}
                  width={320}
                  height={380}
                  viewBox="0 0 320 380"
                  backgroundColor="#c7c2c2"
                  foregroundColor="#ecebeb"
                >
                  <rect x="12" y="269" rx="2" ry="2" width="300" height="11" /> 
                  <rect x="0" y="60" rx="5" ry="5" width="320" height="200" /> 
                  <rect x="12" y="287" rx="2" ry="2" width="300" height="11" /> 
                  <rect x="12" y="306" rx="2" ry="2" width="300" height="11" />
                </ContentLoader>
              </Grid>
            )) : 
            !isError ?
            countries.map((country)=>(
              <Grid className="gridItem" key={country.name.common} item xs={12} sm={12} md={6} lg={4} xl={3}>
                <CountryItem
                  borders={country.borders}
                  name={country.name.common} 
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  image={country.flags.png}  
                />
              </Grid>
            )) : <Typography sx={{mt:"4rem"}} color="textPrimary" variant="h4">No countries found</Typography>
          } 
        </Grid>
        {
          !isError && 
          <Stack sx={{p:"2rem", width:"100%"}}>
            <Pagination 
              page={page} 
              size="small" 
              sx={{margin:"auto"}} 
              count={Math.ceil(countriesTotal/8)}
              onChange={(e,value) => setPage(value)} 
            />
          </Stack>
        }
      </div>
    </Box>
  )
}

export default Home