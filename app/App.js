import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Navigator from "./src/navigations/main.navigator";
import { AuthenticationContextProvider } from "./src/providers/authentication.context";
import { AudioContextProvider } from "./src/providers/audio.context";
import PlayerScreen from "./src/screens/MusicPlayer/Player.screen";
import PlayList from "./src/screens/MusicPlayer/PlayList.screen";
import BottomPlayer from "./src/screens/MusicPlayer/BottomPlayerBar.screen";
export default function App() {
  return (
    <AuthenticationContextProvider>
      <AudioContextProvider>
        <PlayerScreen></PlayerScreen>
      </AudioContextProvider>
    </AuthenticationContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
