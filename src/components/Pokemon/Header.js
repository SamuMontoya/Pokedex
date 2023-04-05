import { View, StyleSheet, SafeAreaView, Text, Image } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getPokeColor from "../../utils/getPokeColor";
import darkerColor from "../../utils/darkerColor";

const Header = ({ name, order, image, type }) => {
  const pokeColor = getPokeColor(type);
  const textColor = darkerColor(pokeColor);
  const bgStyles = { backgroundColor: pokeColor, ...styles.background };
  return (
    <View style={styles.container}>
      <View style={bgStyles} />
      <View style={styles.containerImg}>
        <Image
          source={require("../../assets/pokeball.png")}
          style={styles.pokeball}
        />
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ ...styles.name, color: textColor }}>
          {capitalize(name)}
        </Text>
        <Text style={{ ...styles.order, color: textColor }}>
          #{`${order}`.padStart(3, 0)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
    height: 410,
  },
  image: {
    position: "absolute",
    width: 250,
    height: 250,
    zIndex: 2,
    top: 0,
  },
  containerImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
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
    opacity: 0.2,
    height: 240,
    width: 240,
    top: 0,
    left: 90,
  },
  textContainer: {
    position: "absolute",
    marginTop: 245,
    alignSelf: "center",
  },
  name: {
    fontSize: 45,
    fontWeight: "bold",
  },
  order: {
    fontSize: 25,
    alignSelf: "center",
    color: "white",
  },
});

export default Header;
