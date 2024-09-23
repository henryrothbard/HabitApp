import React from "react";
import { ThemeProvider } from "./theme";
import { ScreenProvider } from "./screen";

export const GlobalProvider = ({ children }) => {
    return (
        <ThemeProvider>
        <ScreenProvider>
            {children}
        </ScreenProvider>
        </ThemeProvider>
    );
};