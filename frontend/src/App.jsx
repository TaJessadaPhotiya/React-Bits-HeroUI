// src/App.jsx
import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Properties from "./components/pages/Properties";
import Contact from "./components/pages/Contact";
import ScrollToTop from "./components/layout/ScrollToTop";
import "./index.css";
import SplitText from "./test/SplitText";
import CircularText from "./test/CircularText";
import ShinyText from "./test/ShinyText";
import AnimatedList from "./test/AnimatedList";
import Stack from "./test/Stack";
import Particles from "./test/Particles";
import Lanyard from "./test/Lanyard";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500">
      <Stack />
      {/* <AnimatedList /> */}
    </div>
  );
}

export default App;
