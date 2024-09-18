import React from "react";
import { View } from "react-native";
import { GlobalProvider } from "./contexts/global";
import Root from "./screens/_root"

export default function App() {
  return (
    <GlobalProvider>
      <Root />
    </GlobalProvider>
  );
}