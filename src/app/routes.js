import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/home";
import {Gallery} from "../pages/gallery";
import {ContactUs} from "../pages/contact";
import {About} from "../pages/about";
import {LegalNotice} from "../pages/legal";
import {Socialicons} from "../components/socialicons";

function AppRoutes() {
  return (
      <div className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/legal" element={<LegalNotice/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
        <Socialicons/>
      </div>
  );
}

export default AppRoutes;
