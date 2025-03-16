import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./App.css"; // Ensure App.css contains the @font-face rule

export default function InfoBox({ weatherData }) {
  //   const Initial_Image_URL =
  //     "https://images.unsplash.com/photo-1672226405717-697c84f48f9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  if (!weatherData) {
    return null; // ✅ Prevent rendering if no data
  }

  const weatherIconUrl = weatherData.weather
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    : "https://via.placeholder.com/100"; // Fallback image if no icon is available

  //   let Whether_Info = {
  //     base: "stations",
  //     clouds: { all: 1 },
  //     cod: 200,
  //     coord: { lon: 88.3697, lat: 22.5697 },
  //     dt: 1741496733,
  //     id: 1275004,
  //     main: {
  //       temp: 30.46,
  //       feels_like: 29.87,
  //       temp_min: 30.46,
  //       temp_max: 30.46,
  //       pressure: 1014,
  //     },
  //     name: "Kolkata",
  //     sys: {
  //       country: "IN",
  //       sunrise: 1741479669,
  //       sunset: 1741522398,
  //     },
  //     timezone: 19800,
  //     visibility: 10000,
  //     weather: [{ main: "Clear", description: "clear sky" }],
  //     wind: { speed: 3.17, deg: 156, gust: 3.49 },
  //   };

  // Display weather information here

  return (
    <div className="InfoBox">
      {/* <h2>{Whether_Info.name}</h2>
        <p>Temperature: {Whether_Info.main.temp}°C</p>
        <p>Description: {Whether_Info.weather[0].description}</p>
        <p>Humidity: {Whether_Info.main.humidity}%</p>
        <p>Wind Speed: {Whether_Info.wind.speed} m/s</p>
        <p>Country: {Whether_Info.sys.country}</p>
        <p>Sunrise: {new Date(Whether_Info.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: {new Date(Whether_Info.sys.sunset * 1000).toLocaleTimeString()}</p> */}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={weatherIconUrl}
            alt="Weather"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontFamily: "WeatherFont, sans-serif" }} // ✅ Apply font here
            >
              {weatherData?.name}, {weatherData?.sys?.country}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "WeatherFont, sans-serif",
                color: "text.secondary",
              }}
            >
              🌡 Temperature: {weatherData?.main?.temp}°C <br />
              💨 Wind Speed: {weatherData?.wind?.speed} m/s <br />
              🌍 Weather: {weatherData?.weather?.[0]?.description} <br />
              🌅 Sunrise:{" "}
              {new Date(
                weatherData?.sys?.sunrise * 1000
              ).toLocaleTimeString()}{" "}
              <br />
              🌇 Sunset:{" "}
              {new Date(
                weatherData?.sys?.sunset * 1000
              ).toLocaleTimeString()}{" "}
              <br />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
