// eslint-disable-next-line import/no-unresolved
import "./global.css";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../assets/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../../assets/assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    void SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      void SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: "#FFFFFF" }} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
