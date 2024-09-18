import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const [appTheme, setAppTheme] = useState('auto');

    // On load
    useEffect(() => {loadTheme()}, []);

    // On appTheme change
    useEffect(() => {
        if (appTheme === 'auto') {
            const sub = Appearance.addChangeListener(({ colorScheme }) => setTheme(colorScheme));
            return () => sub.remove();
        } else setTheme(appTheme);
    }, [appTheme]);

    const loadTheme = async () => {
        const storedTheme = await AsyncStorage.getItem('appTheme');
        if (!storedTheme)
            changeAppTheme(appTheme);
        else
            setAppTheme(storedTheme);
    }

    const changeAppTheme = async (newTheme) => {
        setAppTheme(newTheme);
        await AsyncStorage.setItem('appTheme', newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, appTheme, changeAppTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}