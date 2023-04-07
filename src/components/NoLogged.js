import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const NoLogged = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={require("../assets/pokeball.png")}
        style={styles.pokeball}
      />
      <View style={styles.bg} />
      <Text style={styles.message}>To see this screen please Login!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Account")}
      >
        <Text style={styles.btnText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 105,
    textAlign: "center",
    color: "white",
    width: 200,
  },
  bg: {
    backgroundColor: "#B80221",
    position: "absolute",
    height: 800,
    width: 800,
    borderRadius: 800,
    top: -440,
    left: -200,
  },
  pokeball: {
    position: "absolute",
    zIndex: 1,
    opacity: 0.1,
    height: 300,
    width: 300,
    top: 15,
    alignSelf: "center",
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50,
    marginTop: 180,
    width: 135,
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "#0B2A4D",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
export default NoLogged;
