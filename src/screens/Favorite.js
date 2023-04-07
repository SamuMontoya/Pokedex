import { Button, SafeAreaView, Text } from "react-native";
import { getFavoriteApi } from "../api/favorite";
import React, { useState, useEffect, useCallback } from "react";
import useAuth from "../hooks/useAuth";
import { getInfoPokeApi } from "../api/pokemon";
import PokeList from "../components/PokeList";
import { useFocusEffect } from "@react-navigation/native";
import NoLogged from "../components/NoLogged";

const Favorite = () => {
  const [favorites, seFavorites] = useState(null);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getFavoriteApi();
          const pokeArray = [];
          for await (id of response) {
            const pokeDetails = await getInfoPokeApi(id);
            pokeArray.push({
              id: pokeDetails.id,
              name: pokeDetails.name,
              type: pokeDetails.types[0].type.name,
              order: pokeDetails.order,
              image:
                pokeDetails.sprites.other["official-artwork"].front_default,
            });
          }
          seFavorites(pokeArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NoLogged /> : <PokeList pokemons={favorites} />;
};

export default Favorite;
