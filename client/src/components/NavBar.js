import React from "react";
import { DarkMode } from "../hooks/DarkMode";

const NavBar = () => {
    const [darkMode, setDarkMode] = DarkMode("darkvalue", false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className={darkMode ? 'dark-modeNav' : 'navbar'}>
            <h1>🏆 Women's World Cup Players 🏆</h1>
            <div className="dark-mode_toggle">
                <div onClick={toggleMode}
                    className={darkMode ? "toggle toggled" : "toggle"}
                />
            </div>
        </nav>
    );
};

export default NavBar;