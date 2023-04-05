import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { capitalize, map } from "lodash";
import getPokeColor from "../../utils/getPokeColor";

const Type = ({ types }) => {
  console.log(types);
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{ ...styles.type, borderColor: getPokeColor(item.type.name) }}
        >
          <Text style={{ ...styles.text, color: getPokeColor(item.type.name) }}>
            {capitalize(item.type.name)}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  type: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
    borderWidth: 2,
  },
  text: {
    fontWeight: "900",
  },
});

export default Type;
