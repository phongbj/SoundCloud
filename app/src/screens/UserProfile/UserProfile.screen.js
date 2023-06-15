import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { fontSizes } from "../../theme/fontSizes";
import { Spacer } from "../../components/spacer";
import { Ionicons } from "@expo/vector-icons";
import ItemPlayList from "../MusicPlayer/components/ItemPlayList.component";
import FollowingDetail from "./FollowingDetail.screen";
import { AuthenticationContext } from "../../providers/authentication.context";
import { AudioContext } from "../../providers/audio.context";
import { ArtistContext } from "../../providers/artist.context";
const UserProfile = ({ navigation }) => {
  const { updateUserInfor, user } = useContext(AuthenticationContext);
  const { getFollowerArtistsByUserId, followedArtistIds } =
    useContext(ArtistContext);
  const { likedSongs } = useContext(AudioContext);
  const [avatarUri, setAvatarUri] = useState(user.avatar);
  const { logout } = useContext(AuthenticationContext);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getFollowerArtistsByUserId(user.userId);
  }, []);
  const handleChangeAvatar = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        console.log("result image picker", result);
        await updateUserInfor({ avatar: result.uri });
        setAvatarUri(result.uri);
      }
    } catch (err) {
      console.log("error when select image", err);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{ paddingLeft: 8, paddingRight: 4 }}>
          <Ionicons name="chevron-back" size={32} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            marginRight: 36,
          }}
        >
          <Text style={styles.heading}>Profile</Text>
        </View>
      </View>
      <View style={styles.userInfo}>
        <TouchableOpacity onPress={handleChangeAvatar}>
          {avatarUri == "" ? (
            <Image
              style={styles.avatar}
              source={require("../../../assets/DefaultAvatar.jpg")}
            ></Image>
          ) : (
            <Image style={styles.avatar} source={{ uri: avatarUri }}></Image>
          )}

          <AntDesign
            style={{ position: "absolute", bottom: 0, left: 40 }}
            name="camerao"
            size={24}
            color="gray"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 500,
            paddingLeft: 12,
            fontSize: fontSizes.label,
          }}
        >
          {user.displayName}
        </Text>
        <TouchableOpacity
          onPress={() => logout()}
          style={{
            padding: 8,
            borderRadius: 4,
            marginRight: 8,
            backgroundColor: "tomato",
            position: "absolute",

            bottom: 0,
            right: 0,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 500, textAlign: "left" }}>
            Sign out
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingLeft: 24,
          marginTop: 12,
          marginBottom: 60,
        }}
      >
        {/* <View style={styles.follow}>
          <Text style={styles.followText}>0</Text>
          <Text style={styles.followText}> Follower</Text>
        </View> */}
        <Spacer position={"left"} size={"large"}></Spacer>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={styles.follow}
        >
          <Text style={styles.followText}>{followedArtistIds.length}</Text>
          <Text style={styles.followText}> Following</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        <Text style={styles.title}>Liked songs</Text>
        <FlatList
          data={likedSongs}
          renderItem={({ item, index }) => (
            <ItemPlayList songIndex={index} song={item} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <FollowingDetail
          artistIds={followedArtistIds}
          setModalVisible={setModalVisible}
        ></FollowingDetail>
      </Modal>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    height: 60,
    paddingTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  heading: {
    fontSize: fontSizes.heading3,
    fontWeight: 500,
    textAlign: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
  },
  userInfo: {
    width: "100%",
    flexDirection: "row",
    marginTop: 40,
    paddingLeft: 24,
    alignItems: "center",
  },
  follow: {
    flexDirection: "row",
  },
  followText: {
    fontWeight: 400,
    fontSize: fontSizes.normalTextSize,
  },
  title: {
    marginLeft: 20,
    fontSize: fontSizes.label,
    fontWeight: 500,
  },
});
