import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
// import Page6 from "./pages/Page6";
import Header from "./components/Header";

function App() {
  return (
    <>
    <div id="main">
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      {/* <Page6/> */}
    </div>
    </>
  );
}

export default App;
// https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1859,h_924,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg
// https://www.anzo.studio/