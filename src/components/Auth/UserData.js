import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import { getFavoriteApi } from "../../api/favorite";

const UserData = () => {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getFavoriteApi();
          setTotal(size(response));
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.bg} />
      <View style={styles.titleBlock}>
        <Text style={styles.title}>¡Welcome!</Text>
        <Text style={styles.name}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Name" info={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" info={`${auth.username}`} />
        <ItemMenu title="Email" info={`${auth.email}`} />
        <ItemMenu title="Total Favorites" info={`${total} Pokemons`} />
      </View>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.btnText}>LogOut</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const ItemMenu = ({ title, info }) => (
  <View style={styles.infoBox}>
    <Image
      source={require("../../assets/pokeball.png")}
      style={styles.pokeball}
    />
    <Text style={styles.textBox}>{title}:</Text>
    <Text style={styles.dataBox}>{info}</Text>
  </View>
);

const styles = StyleSheet.create({
  titleBlock: {
    marginBottom: 65,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "#BFBFBF",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  dataContent: {
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: "#0B2A4D",
    margin: 10,
    paddingVertical: 20,
    borderRadius: 50,
    paddingLeft: 40,
  },
  textBox: {
    fontWeight: "bold",
    color: "#8AD8FF",
    left: 40,
  },
  dataBox: {
    fontSize: 15,
    color: "white",
    left: 40,
  },
  pokeball: {
    height: 60,
    width: 60,
    left: 10,
    top: 10,
    position: "absolute",
    opacity: 0.5,
    tintColor: "white",
  },
  bg: {
    backgroundColor: "#B80221",
    position: "absolute",
    height: 700,
    width: 700,
    borderRadius: 800,
    top: -590,
    left: -150,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50,
    width: 112,
    alignContent: "center",
    alignSelf: "center",
    borderColor: "#B80221",
    borderWidth: 2,
    marginBottom: 40,
  },
  btnText: {
    color: "#B80221",
    fontWeight: "bold",
  },
});

export default UserData;
