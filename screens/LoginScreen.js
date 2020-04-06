import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class LoginScreen extends Component {
  signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        behavior: 'web',
        androidClientId: '438151930129-jvs80ai8gh9pmbc2s842et1pdg129cib.apps.googleusercontent.com',
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Sign In With Google"
          onPress={() => this.signInWithGoogleAsync()}
        />
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
