import React from "react";
import { GlobalProvider } from "./contexts/global";
import Root from "./screens/_root"
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GlobalProvider>
      <GestureHandlerRootView>
        <Root/>
      </GestureHandlerRootView>
    </GlobalProvider>
  );
}