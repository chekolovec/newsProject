import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default () => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.buttonWrapper}>
        <View style={styles.menuLine}></View>
        <View style={styles.menuLine}></View>
        <View style={styles.menuLine}></View>
      </TouchableOpacity>
    </View>
  );
};
