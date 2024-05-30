import React, { useState, createContext, useContext } from "react";
import "./dashboard.styles.css";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";

export const DashboardContext = createContext();
export const useDashboardContext = () => useContext(DashboardContext);

const Dashboard = () => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = (value) => {
    setTheme(value);
  };
  return (
    <div className="container flex flex-col gap-32">
      <Navbar changeThemeInDashboard={changeTheme} />
      <div className="content">
        <Outlet context={[theme]} />
      </div>
    </div>
  );
};

export default Dashboard;
