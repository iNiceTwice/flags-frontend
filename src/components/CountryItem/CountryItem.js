import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Item = ({ name, population, region, capital, image }) => {
    return ( 
        <>
            <Link to={`/${name}`}>
                <Card sx={{scale:{xs:"0.8", sm:"0.8", md:"1"}, gap:1, mb:4 }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{height:"200px", width:"320px"}}
                            loading="lazy"
                            component="img"
                            image={image}
                            alt={`Flag of ${name}`}
                        />
                        <CardContent sx={{px:3,py:4}}>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <div style={{display:"flex", alignItems:"baseline"}}>
                                <Typography sx={{mr:1}} variant="body1" color="text.primary">
                                    Population:  
                                </Typography>
                                <Typography variant="body2" color="text.secondary">{population}</Typography>
                            </div>
                            <div style={{display:"flex", alignItems:"baseline"}}>
                                <Typography sx={{mr:1}} variant="body1" color="text.primary">
                                    Region:  
                                </Typography>
                                <Typography variant="body2" color="text.secondary">{region}</Typography>
                            </div>
                            <div style={{display:"flex", alignItems:"baseline"}}>
                                <Typography sx={{mr:1}} variant="body1" color="text.primary">
                                    Capital:  
                                </Typography>
                                <Typography variant="body2" color="text.secondary">{capital}</Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </>
     );
}
 
export default Item;