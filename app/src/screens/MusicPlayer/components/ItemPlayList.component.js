import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext, memo } from "react";
import { AudioContext } from "../../../providers/audio.context";
import { formatTime } from "../../../utils/TimeFormater";
const ItemPlayList = ({ song = {} }) => {
  const { setPlayerVisbile, setCurrentSong } = useContext(AudioContext);
  return (
    <TouchableOpacity
      onPress={() => {
        setCurrentSong(song);
        setPlayerVisbile((value) => !value);
      }}
      style={styles.container}
    >
      <Image
        source={{
          uri: "https://images2.thanhnien.vn/528068263637045248/2023/5/10/iu-1683710624038576717966.png",
        }}
        style={styles.img}
      ></Image>
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text
          numberOfLines={1}
          style={{ fontSize: 16, color: "white", fontWeight: 500 }}
        >
          {song.name}
        </Text>
        <Text numberOfLines={1} style={{ color: "#cac5e5" }}>
          {song.artistString}
        </Text>
      </View>
      <Text style={{ color: "#cac5e5", marginLeft: 12, marginRight: 4 }}>
        {formatTime(song.duration)}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(ItemPlayList);

const styles = StyleSheet.create({
  container: {
    height: 88,
    backgroundColor: "#231b4d",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    padding: 12,
    margin: 12,
  },
  boxWithShadow: {
    shadowColor: "#000",
    borderWidth: 1,
    overflow: "hidden",
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 10,
  },
  img: { borderRadius: 50, width: 40, height: 40, resizeMode: "cover" },
});