import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/home";
import {LegalNotice} from "../pages/legal";
import {Socialicons} from "../components/socialicons";

function AppRoutes() {
  return (
      <div className="grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/legal" element={<LegalNotice/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
        <Socialicons/>
      </div>
  );
}

export default AppRoutes;
