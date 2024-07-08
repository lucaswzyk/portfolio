import React from "react";
import "./style.css";
import { logotext } from "../content_option";

const Headermain = () => {
  const handleLogoClick = () => {
    window.location.href = "/portfolio";
  };

  return (
    <header className="fixed-top site__header">
      <div className="d-flex align-items-center justify-content-between">
        <a
          href="/portfolio"
          className="navbar-brand nav_ac"
          onClick={handleLogoClick}
        >
          {logotext}
        </a>
      </div>
    </header>
  );
};

export default Headermain;
