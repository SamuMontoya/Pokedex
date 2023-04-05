import { StyleSheet, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import PokeCard from "./PokeCard";

const PokeList = ({ pokemons, loadPokemons, isNext }) => {
  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => pokemon.id}
      renderItem={({ item }) => <PokeCard pokemon={item} />}
      contentContainerStyle={styles.container}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spiner}
            color="#0A294C"
          />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  spiner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

export default PokeList;
