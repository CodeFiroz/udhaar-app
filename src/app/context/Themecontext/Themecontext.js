"use client";

import { createContext, useState, useEffect, useContext } from "react";

// Create ThemeContext
const ThemeContext = createContext();

// Create ThemeProvider
export const ThemeProvider = ({ children }) => {
    // Initialize theme from localStorage or default to "light"
    const [sitetheme, setSiteTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light";
        }
        return "light"; // Default to light on the server-side rendering
    });

    // Synchronize theme mode changes to localStorage
    useEffect(() => {
        localStorage.setItem("theme", sitetheme);
        // Apply the theme to the <body> class directly for consistent UI
        document.body.className = sitetheme;
    }, [sitetheme]);

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setSiteTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ sitetheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
