import React from "react";
import './navBar.css'

function NavBar({updateSectionNumber}) {

  const goOnMainPage = () => {
    updateSectionNumber(-1);
  };

  return (
    <nav className="navbar" onClick={goOnMainPage}>
      <h3 className="logo-title">
        &nbsp;| RESUME | BUILDER |
      </h3>
    </nav>
  );
}

export default NavBar;