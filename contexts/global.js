import React from "react";
import { ThemeProvider } from "./theme";

export const GlobalProvider = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}