import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import './CSS.css'


const Theme = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    
    return (
        <div className={`container ${theme}`}>
            <h1>Alterar entre Tema Claro e Escuro</h1>
            <button onClick={toggleTheme}>Alterar</button>
        </div>
    );
}

export default Theme;