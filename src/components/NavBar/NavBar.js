import { useDispatch, useSelector} from "react-redux"
import { Toolbar, AppBar, Typography, Switch } from "@mui/material";
import { ModeNight } from "@mui/icons-material"
import { themeActions } from "../../redux/actions/themeActions"

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
                    <Typography variant="h5" sx={{flexGrow:1,fontWeight:"bold", fontSize:{xs:"1rem"}}} >Where in the world?</Typography>
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