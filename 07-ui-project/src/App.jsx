import { useState } from "react";
import "boxicons";
import "./App.css";

import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

function App() {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1579047917338-a6a69144fe63?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGN1c3RvbWVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      intro: " Prime customers that have access to bank credit and are satisfied with the current product.",
      tag: "Satisified",
      color: "blue"
    },
    {
      img: "https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "Prime customers that have access to bank credit and are not satisfied with the current service.",
      tag: "Underserved",
      color: "skyblue"
    },
    {
      img: "https://images.unsplash.com/photo-1652189892923-5e999edd64b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=685",
      intro: " Customers from near-prime and sub-prime segments with no accessto bank credit.",
      tag: "Underbanked",
      color: "green"
    },
  ];

  return (
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  );
}

export default App;
