import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'; // Assuming you have a CSS file for styling
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import SunnySnowingIcon from '@mui/icons-material/SunnySnowing';


export default function InfoBox( { info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    const HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670347627514-07a3d37e0670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";  
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1674684222755-98a35d94cdfa?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
    
    return (
        <div className="InfoBox">
            {/* <h2>WeatherInfo - {info.Weather}</h2> */}
            <div className="CardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 70 
                        ? RAIN_URL 
                        : info.temp > 30 
                        ? HOT_URL 
                        : info.temp < 15
                         ? COLD_URL 
                        : INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {
                        info.humidity > 70 
                        ? <ThunderstormIcon />
                        : info.temp > 30 
                        ? <SunnyIcon />
                        : info.temp < 15
                         ? <AcUnitIcon />
                        : <SunnySnowingIcon />}
                        
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                     <div>Temperature: {info.temp}°C</div>  
                     <div>Min Temperature: {info.tempMin}°C</div>
                     <div>Max Temperature: {info.tempMax}°C</div>
                     <div>Humidity: {info.humidity}%</div>
                     <div>Pressure: {info.pressure} hPa</div>
                     <p>The weather can be described as <i>{info.Weather}</i> feels like {info.feelsLike}</p>     
                  
                    </Typography>
                </CardContent>
               
            </Card>
            </div>
        </div>
        
        
    )
}