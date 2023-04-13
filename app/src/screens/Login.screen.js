import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import EditText from "./shared-components/EditText.component";
import AuthFrame from "./shared-components/AuthFrame.component";
import {
  AuthButton,
  GoogleAuthButton,
  FbAuthButton,
} from "./shared-components/AuthButton.component";
import { Spacer } from "../components/spacer";
import { Colors } from "../theme/color";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <AuthFrame heading={"Sign in"}>
        <GoogleAuthButton
          buttonContent={"Continue with Google"}
        ></GoogleAuthButton>

        <Spacer position={"top"} size={"large"}></Spacer>

        <FbAuthButton buttonContent={"Continue with Facebook"}></FbAuthButton>

        <Spacer position={"top"} size={"huge"}></Spacer>
        <Spacer position={"top"} size={"huge"}></Spacer>

        <EditText placeholder={"Email"} iconLeft={"email"}></EditText>
        <Spacer position={"top"} size={"large"}></Spacer>
        <EditText
          isPasswordType={true}
          placeholder={"Password"}
          iconLeft={"lock"}
        ></EditText>

        <Spacer position={"top"} size={"huge"}></Spacer>
        <Spacer position={"top"} size={"large"}></Spacer>

        <AuthButton buttonContent={"Continue"}></AuthButton>

        <Spacer position={"top"} size={"medium"}></Spacer>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </TouchableOpacity>
      </AuthFrame>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.authBackground,
  },
  forgotPassword: {
    fontSize: 16,
    color: "black",
  },
});
