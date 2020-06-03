import React, { createContext, useState } from 'react';
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export const LocalContext = createContext()
const ContextProvider = (props) => {
    const [color, setColor] = useState({
        light: { bg: 'white', icon: faMoon, title: 'black', iconColor: 'black', text: 'black', input: 'white', btn1: '#c44569', btn2: '#ff7979' },
        dark: { bg: 'black', text: 'white', title: '#e056fd', icon: faSun, iconColor: '#FFA500', input: '#3d3d3d', btn1: '#e056fd', btn2: '#00d1b2' }
    })
    const [theme, setTheme] = useState(false)
    const toggleTheme = () => {
        setTheme(!theme)
    }
    return (
        <LocalContext.Provider value={{ toggleTheme, color, theme }}>
            {props.children}
        </LocalContext.Provider>
    );
}

export default ContextProvider;


