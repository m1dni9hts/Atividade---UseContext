import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import '../App.css'; // Atualizar a importação do CSS

const Theme = () => {
    const { toggleTheme } = useContext(ThemeContext);
   
    return (
        <div className="container">
            <h1>Alterar entre Tema Claro e Escuro</h1>
            <button onClick={toggleTheme}>Alterar</button>
        </div>
    );
}

export default Theme;
