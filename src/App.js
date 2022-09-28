import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from "react-redux"
import Home from "./pages/home/home"
import Error404 from "./pages/error404/error404"
import Country from './pages/country/country';

const darkTheme = createTheme({
 typography: {
    fontFamily: 'Nunito Sans'
  },
  palette: {
    mode: 'dark',
    primary:{
      main:"hsl(209, 23%, 19%)",
      constrastText:"#fff"
    },
    background:{
      default:"hsl(207, 26%, 17%)",
      paper:"hsl(209, 23%, 19%)"
    }
  }
});
const lightTheme = createTheme({
   typography: {
    fontFamily: 'Nunito Sans',
  },
  palette:{
    mode:"light",
    primary:{
      main:"hsl(0, 0%, 100%)"
    },
    background:{
      default:"hsl(0, 0%, 95%)",
      paper:"hsl(0, 0%, 100%)"
    }
  }
})



const App = () => {

  const darkMode = useSelector(state => state.theme.nightMode)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/:country" element={<Country/>} />
        </Routes>
      </BrowserRouter>  
    </ThemeProvider>
  
  );
}

export default App;
