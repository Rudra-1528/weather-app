import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState({
        city: "Delhi",
        country: "N/A",
        temp: "N/A",
        tempMin: "N/A",
        tempMax: "N/A",
        humidity: "N/A",
        pressure: "N/A",
        feelsLike: "N/A",
        windSpeed: "N/A",
        Weather: "Haze"
    }); 

    let updateWeatherData = (result) => {
        setWeatherData(result);
    }
    
    return (
        <div className="WeatherApp" style={{ textAlign: 'center' }}>
            <h1>Weather App by RK</h1>
            <SearchBox updateWeatherData={updateWeatherData}/>
            <InfoBox info={weatherData} />
        </div>
    );
} 
