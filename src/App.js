import "./index.css";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./containers/Header";
import Company from "./containers/Company";
import AboutUs from "./containers/AboutUs";
import SocialMedia from "./containers/SocialMedia";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Company />
      <AboutUs />
      <SocialMedia />
    </div>
  );
}

export default App;
