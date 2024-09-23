import React, { createContext, useContext, useState } from "react";

import SocialScreen from "../screens/social";
import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile";

const defaultScreen = 1; // 1 == HomeScreen

export const Screens = [
    { element: SocialScreen, icon: 'analytics-outline' },
    { element: HomeScreen, icon: 'home-outline' },
    { element: ProfileScreen, icon: 'person-outline' },
];

export const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
    const [screenId, setScreenId] = useState(defaultScreen);

    return (
        <ScreenContext.Provider value={{ screenId, setScreenId }}>
            {children}
        </ScreenContext.Provider>
    );
};

export function CurrentScreen() {
    const { screenId, setScreenId } = useContext(ScreenContext);
    if (!Screens[screenId]) setScreenId(defaultScreen);
    const Screen = Screens[screenId].element || Screens[defaultScreen].element;
    return ( <Screen /> );
};