import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import Footer from "../components/footer";
// import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";
// Import i18n configuration
import "../i18n/i18n";

export default function App() {
  return (
      <Router>
        {/* <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div> */}
        <Headermain/>
        <AppRoutes/>
        <Footer/>
      </Router>
  );
}
