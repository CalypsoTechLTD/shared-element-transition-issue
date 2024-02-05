import "../global.css";
import { Slot, Stack, Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
