import React, { useEffect } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { GlobalProvider } from "./contexts/global";
import Root from "./screens/_root"
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'AF-Regular': require('./assets/fonts/AfacadFlux-Regular.ttf'),
    'AF-Black': require('./assets/fonts/AfacadFlux-Black.ttf'),
    'AF-Bold': require('./assets/fonts/AfacadFlux-Bold.ttf'),
    'AF-ExtraBold': require('./assets/fonts/AfacadFlux-ExtraBold.ttf'),
    'AF-ExtraLight': require('./assets/fonts/AfacadFlux-ExtraLight.ttf'),
    'AF-Light': require('./assets/fonts/AfacadFlux-Light.ttf'),
    'AF-Medium': require('./assets/fonts/AfacadFlux-Medium.ttf'),
    'AF-SemiBold': require('./assets/fonts/AfacadFlux-SemiBold.ttf'),
    'AF-Thin': require('./assets/fonts/AfacadFlux-Thin.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GlobalProvider>
      <GestureHandlerRootView>
        <Root/>
      </GestureHandlerRootView>
    </GlobalProvider>
  );
}