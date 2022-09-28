import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Error404 = () => {
    return ( 
        <Box sx={{minHeight:"calc(100vh)", width:"100%", bgcolor:"background.default", display:"flex"}}>
            <Box sx={{margin:"auto", textAlign:"center"}}>
                <Typography variant="h2" color="textPrimary" >
                    404
                </Typography>
                <Typography variant="subtitle1" color="textPrimary" >
                    Oops! We couldn't find this page
                </Typography>
                <Button component={Link} to="/" sx={{mt:"1rem"}} variant="contained" fullWidth >Return</Button>
            </Box>
        </Box>
     );
}
 
export default Error404;