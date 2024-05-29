import React, { useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import "./navbar.styles.css";
import logo from "../../assets/images/boom-flights-no-bg.png";

import Toggle from "../common/toggle/toggle.component";

const Navbar = ({ changeThemeInDashboard }) => {
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();
  const changeTheme = (value) => {
    let themeColor = value ? "dark" : "light";
    changeThemeInDashboard(themeColor);
    setTheme(themeColor);
  };

  window.onscroll = () => {
    stickyNavigation();
  };
  const stickyNavigation = () => {
    var header = document.getElementById("navbar");
    var sticky = header.offsetTop;

    if (window.scrollY > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  return (
    <nav
      id="navbar"
      className={classNames(
        "navbar transition border-shadow-thick px-16 py-8",
        {
          "bg-primary text-white": theme === "dark",
          "bg-tertiary text-black": theme === "light",
        }
      )}
    >
      <div className="flex flex-row mx-16 my-8 justify-space-between align-center">
        <section
          className="flex flex-row align-center gap-2 pointer"
          onClick={() => navigate("/")}
        >
          <img className="img-logo mx-2" src={logo} alt="logo" />
          <header className="flex flex-col">
            <h1 className="pos-rel">BOOM FLIGHTS</h1>
            <h5 className="text-center">where the world flies</h5>
          </header>
        </section>
        <div className="flex flex-row gap-4">
          <h3>{theme.toLowerCase()}</h3>
          <Toggle changeTheme={changeTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
