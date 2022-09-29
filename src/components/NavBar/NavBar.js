import { useDispatch, useSelector} from "react-redux"
import { Toolbar, AppBar, Typography, Switch} from "@mui/material";
import { ModeNight } from "@mui/icons-material"
import { themeActions } from "../../redux/actions/themeActions"
import { Link } from "react-router-dom";

const NavBar = () => {

    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.theme.nightMode)

    const handleChange = (e) => {
        dispatch(themeActions(e.target.checked))
    }
    
    return ( 
        <div>
            <AppBar position="static" elevation={5}>
                <Toolbar sx={{mx:3}}>
                    <Link style={{flexGrow:1}} to="/">
                        <Typography variant="h5" sx={{fontWeight:"bold", fontSize:{xs:"1rem", md:"1.2rem"}}} >Where in the world?</Typography> 
                    </Link>
                    <Switch 
                        checked={darkMode}
                        onChange={handleChange}
                    >
                        Dark Mode
                    </Switch>
                    <ModeNight/>
                </Toolbar>
            </AppBar>        
        </div>
     );
}
 
export default NavBar;