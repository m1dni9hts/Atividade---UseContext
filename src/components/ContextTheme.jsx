import React, { Childre, createContext, useState} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(Theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider values={{ theme }}>
            {children}
        </ThemeContext.Provider>
    )
}