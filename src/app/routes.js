import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/home";
import {LegalNotice} from "../pages/legal";
import {SocialIcons} from "../components/socialicons";

function AppRoutes() {
  return (
      <div className="grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/legal" element={<LegalNotice/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
        <SocialIcons
            vertical
            className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-50"
        />
      </div>
  );
}

export default AppRoutes;
