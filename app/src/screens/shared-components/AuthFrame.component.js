import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  FbAuthButton,
  GoogleAuthButton,
  AuthButton,
} from "./AuthButton.component";
import { Spacer } from "../../components/spacer";

const AuthFrame = ({ children, heading }) => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtnWrapper}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.heading}>{heading}</Text>
      </View>

      {children}
    </View>
  );
};

export default AuthFrame;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
  },
  header: {
    flexDirection: "row",
    marginBottom: 48,
    marginTop: 20,
    alignItems: "center",
  },
  backBtnWrapper: {
    backgroundColor: "gray",
    borderRadius: 50,
    padding: 6,

    marginRight: 16,
  },
});
