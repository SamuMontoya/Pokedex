import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { capitalize, map } from "lodash";
import darkerColor from "../../utils/darkerColor";
import getPokeColor from "../../utils/getPokeColor";

const Stats = ({ stats, type }) => {
  const pokeColor = getPokeColor(type);
  const color = darkerColor(pokeColor);

  const barStyles = (num) => {
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <View style={styles.content}>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <Text style={{ ...styles.blockTitle, color: color }}>
            {capitalize(item.stat.name)}
          </Text>
          <View style={styles.blockInfo}>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]} />
            </View>
            <Text style={{ ...styles.number, color: color }}>
              {item.base_stat}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 40,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "40%",
    fontSize: 15,
    fontWeight: "bold",
  },
  blockInfo: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "15%",
    fontSize: 12,
    marginLeft: 10,
  },
  bgBar: {
    backgroundColor: "gray",
    width: "85%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});

export default Stats;
