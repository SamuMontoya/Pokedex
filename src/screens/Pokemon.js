import { ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { getInfoPokeApi } from "../api/pokemon";
import { ActivityIndicator } from "react-native";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";

const Pokemon = ({ navigation, route: { params } }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="white"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getInfoPokeApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon)
    return (
      <ActivityIndicator size="large" style={styles.spiner} color="#0A294C" />
    );

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} type={pokemon.types[0].type.name} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  spiner: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default Pokemon;
