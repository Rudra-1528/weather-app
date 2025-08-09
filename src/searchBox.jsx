import  { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css'; // Assuming you have a CSS file for styling


export default function SearchBox({updateWeatherData}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
   
    // API URL and key for fetching weather data
    // Note: Replace with your actual API key and URL if needed
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "865fbfca4f96be6c1c843e69eff3fca4"

    let getWeatherInfo = async () => {
        try {
             let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            feelsLike: jsonResponse.main.feels_like,
            windSpeed: jsonResponse.wind.speed,
            Weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        // Here you can handle the response, e.g., update state or display data
        } catch (error) {
            throw error; // Propagate the error to be caught in handleSubmit
       
    }
    };



    let handleChange = (e) => {
        setCity(e.target.value);    
    }   

    let handleSubmit = async (e) => {
        try {
             e.preventDefault(); 
        // Here you can handle the search logic, e.g., fetching weather data
        console.log("Searching for weather in:", city); 
       
        let newData =  await getWeatherInfo();
        updateWeatherData(newData);// Call the function to fetch weather info
        setCity(""); // Clear the input field after submission
        setError(false); // Reset error state on successful fetch
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError(true);
            
           // Handle error, e.g., show an error message to the user        
    }
    };


    return (
        <div className="searchBox">
            
            <form onSubmitCapture={handleSubmit}>
                <TextField id="City" label="City Name" 
                variant="outlined" required
                value={city}  
                onChange={handleChange}/>
                <br /> <br />
                <Button variant="contained" type='submit'>
                  Search
                </Button>
                
                {error && <p style={{color: 'red'}}>No such place Data. Please try again.</p>}
            </form>
        </div>
    );

};    