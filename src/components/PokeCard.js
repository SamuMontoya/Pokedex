import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import getPokeColor from "../utils/getPokeColor";
import { capitalize } from "lodash";
import darkerColor from "../utils/darkerColor";

const PokeCard = ({ pokemon }) => {
  const pokeColor = getPokeColor(pokemon.type);
  const bgStyles = { backgroundColor: pokeColor, ...styles.background };
  const Navigation = useNavigation();

  const goToPokemon = () => {
    Navigation.navigate("Pokemon", { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <Image
          source={require("../assets/pokeball.png")}
          style={{ ...styles.background, zIndex: 1, opacity: 0.2 }}
        />
        <View style={bgStyles} />
        <Image
          source={{ uri: pokemon.image }}
          style={{ ...styles.image, zIndex: 2 }}
        />
        <Text style={{ ...styles.text, color: darkerColor(pokeColor) }}>
          {capitalize(pokemon.name)}
        </Text>
        <Text style={{ ...styles.order, color: pokeColor }}>
          #{`${pokemon.order}`.padStart(3, 0)}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 180,
    margin: 15,
    alignItems: "center",
  },
  background: {
    position: "absolute",
    height: 120,
    width: 120,
    borderRadius: 100,
  },
  image: {
    height: 130,
    width: 130,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  order: {
    fontSize: 15,
  },
});

export default PokeCard;
