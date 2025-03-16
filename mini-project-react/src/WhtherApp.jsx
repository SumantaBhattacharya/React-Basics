import React from 'react'
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox";
import "./App.css"; // Ensure App.css contains the @font-face rule
// import { blue } from '@mui/material/colors';

// rafce
const WhtherApp = () => {
  return (
    <div>
      <h2 style={{fontFamily:"WeatherFont", color: "blue", fontSize: "2vw"}}>Whether App by  Delta</h2>
      <SearchBox />
      <InfoBox />
    </div>
  )
}

export default WhtherApp
