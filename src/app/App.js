import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";
// import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";
// Import i18n configuration
import "../i18n/i18n";

export default function App() {
  return (
      <Router>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop/>
          <Headermain/>
          <AppRoutes/>
          <Footer/>
        </div>
      </Router>
  );
}
