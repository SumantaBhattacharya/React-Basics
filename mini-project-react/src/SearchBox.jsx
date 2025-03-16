import React, { useState } from "react";
import "./App.css"; // Ensure App.css contains the @font-face rule
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import InfoBox from "./InfoBox"; // Ensure you import InfoBox

const SearchBox = () => {
  const [isText, setText] = useState("");
  const [error, setError] = useState(null); // Store error message if any
  const [weatherData, setWeatherData] = useState(null); // Store weather data

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  // const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  const getWhetherInfo = async () => {
    // console.log("API_KEY:", API_KEY);
    try {
      let res = await fetch(
        `${API_URL}?q=${isText}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await res.json();

      // cod is typically a status code that the API returns as part of its response.
      if (jsonResponse.cod === "404") {
        alert("City not found.");
        // alert(`Error: ${jsonResponse.message}`);
        return;
      }

      // Display the weather data in the UI
      /*let result = {
        city: jsonResponse.name,
        country: jsonResponse.sys.country,
        temperature: jsonResponse.main.temp,
        description: jsonResponse.weather[0].description,
        // icon: jsonResponse.weather[0].icon,
        // iconURL: `http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@2x.png`,
        pressure: jsonResponse.main.pressure,
        seaLevel: jsonResponse.main.sea_level,
        grndLevel: jsonResponse.main.grnd_level,
        tempMax: jsonResponse.main.temp_max,
        tempMin: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        windSpeed: jsonResponse.wind.speed,
        date: new Date(jsonResponse.dt * 1000).toLocaleDateString("en-US"),
        sunrise: new Date(jsonResponse.sys.sunrise * 1000).toLocaleTimeString("en-US"),
        sunset: new Date(jsonResponse.sys.sunset * 1000).toLocaleTimeString("en-US"),
        clouds: jsonResponse.clouds.all,
        weatherIcon: `http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@2x.png`,
      }*/

      // Process the weather data here
      console.log(jsonResponse);

      // Add your UI code here to display the weather data
      // console.log(result);

      // Store data in state
      setWeatherData(jsonResponse);
    } catch (error) {
      alert("Failed to fetch weather information. Please try again.");
      setError(error.message);
      // console.error("Error fetching weather data:", error);
    }
  };

  const handleChange = (event) => {
    const input = event.target.value;
    //                                              H + ello
    // const FirstLetterCapital = input.charAt(0).toUpperCase() + input.slice(1);
    const FirstLetterCapital = input
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Update the state with the modified input
    setText(FirstLetterCapital);
  };

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      // Call your API or perform any other necessary actions with the input value

      if (isText.trim() === "") {
        alert("Please fill in the city name.");
        return; // Exit the function to prevent further actions
      }

      console.log("Submitting the form with input:", isText);

      // Call getWhetherInfo to fetch weather information
      getWhetherInfo();

      // Reset the input field after submission
      setText("");
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Error:", error);
      // Reset the error state
      setError(null);
      // Reset the input field after submission
      setText("");
      // Reset the weather data state
      setWeatherData(null);

    }
  };

  return (
    // m - margin
    <div className="container" style={{}}>
      <h2 className="weather-widget">WeatherWidget</h2>
      <form action="" onSubmit={handleSubmit}>
        <Box
          //   component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            value={isText}
            onChange={handleChange}
            // 50 characters.
            inputProps={{ maxLength: 50 }}
            sx={{
              "& .MuiInputBase-input": {
                fontFamily: "WeatherFont, sans-serif",
                fontSize: "1vw",
              },
              "& .MuiInputLabel-root": {
                fontFamily: "WeatherFont, sans-serif",
                fontSize: "1vw",
                color: "#fff",
              },
            }}
            required
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            fontFamily: "WeatherFont, sans-serif",
            fontSize: "1vw",
            m: 1,
            width: "19.2ch",
            textTransform: "none",
          }}
        >
          Send
        </Button>
      </form>
      {/* if whtherData exists, passing weatherData as a prop. */}
      {weatherData && <InfoBox weatherData={weatherData} />}
      {/* Add your UI code here to display the weather data */}
      {/* ✅ Pass weatherData to InfoBox */}
      {/* <InfoBox weatherData={weatherData} /> */}
    </div>
  );
};

export default SearchBox;
// To change this behavior and keep the text in its original case, you can override this default style by adding the sx prop
