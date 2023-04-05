import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { getPokeApi, getDetailsPokeApi } from "../api/pokemon";
import PokeList from "../components/PokeList";
import { ActivityIndicator } from "react-native";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokeApi(nextUrl);
      const pokeArray = [];
      for await (pokemon of response.results) {
        const pokeDetails = await getDetailsPokeApi(pokemon.url);
        pokeArray.push({
          id: pokeDetails.id,
          name: pokeDetails.name,
          type: pokeDetails.types[0].type.name,
          order: pokeDetails.order,
          image: pokeDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokeArray]);
      setIsLoading(false);
      setNextUrl(response.next);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading)
    return (
      <ActivityIndicator size="large" style={styles.spiner} color="#0A294C" />
    );

  return (
    <SafeAreaView style={styles.container}>
      <PokeList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 15,
  },
  spiner: {
    flex: 1,
    alignSelf: "center",
  },
});

export default Pokedex;
