import { Stack } from "expo-router";
import 'C:/Users/ANIRUF/Documents/Hybrid JS/LatteCalculator2/global.css';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Login", headerShown: false}}/>
      <Stack.Screen name="dashboard" options={{title: "Homepage", headerShown: false}}/>
    </Stack>
  );
}
