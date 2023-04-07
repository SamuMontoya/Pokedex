import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addFavoriteApi,
  isPokeFavApi,
  removeFavPokeApi,
} from "../../api/favorite";

const Favorite = ({ id }) => {
  const [isFav, setIsFav] = useState(undefined);
  const [rCheck, setRCheck] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokeFavApi(id);
        setIsFav(response);
      } catch (error) {
        setIsFav(false);
      }
    })();
  }, [id, rCheck]);

  const addToFav = async () => {
    try {
      await addFavoriteApi(id);
      onReload();
    } catch (error) {
      console.error(error);
    }
  };

  const onReload = async () => {
    setRCheck((prev) => !prev);
  };

  const removeFav = async () => {
    try {
      await removeFavPokeApi(id);
      onReload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Icon
      name="heart"
      color="white"
      size={20}
      solid={isFav}
      onPress={isFav ? removeFav : addToFav}
      style={{ marginRight: 20 }}
    />
  );
};

export default Favorite;
