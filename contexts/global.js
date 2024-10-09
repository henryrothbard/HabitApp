import React from "react";
import { ThemeProvider } from "./theme";
import { ScreenProvider } from "./screen";
import { ModalProvider } from "./modal";

export const GlobalProvider = ({ children }) => {
    return (
        <ThemeProvider>
        <ScreenProvider>
        <ModalProvider>
            {children}
        </ModalProvider>
        </ScreenProvider>
        </ThemeProvider>
    );
};