import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
        <About />
        <Features />
        <CallToAction />
      </div>
    </div>
  );
}
