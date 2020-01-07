import React, { useState } from "react";
import {
  Animated,
  Button,
  Image,
  Linking,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";
import INewsArticle from "./types";

export default ({ article }: INewsArticle) => {
  const initialHeight = 140;
  const [heightValue] = useState(new Animated.Value(initialHeight));
  const [maxHeight, setMaxHeight] = useState(0);
  const [isOpen, toggleOpen] = useState(false);

  const toggleHeight = () => {
    if (heightValue._value === maxHeight) {
      Animated.timing(heightValue, {
        toValue: initialHeight,
      }).start();
      toggleOpen(!isOpen);
    } else {
      Animated.timing(heightValue, {
        toValue: maxHeight,
      }).start();
      toggleOpen(!isOpen);
    }
  };

  const getMaxHeight = (event: {
    nativeEvent: { layout: { height: number } };
  }) => {
    if (!maxHeight) {
      setMaxHeight(event.nativeEvent.layout.height);
    }
  };

  return (
    <Animated.View
      style={[styles.wrapper, maxHeight ? { height: heightValue } : ""]}
      onLayout={getMaxHeight}
    >
      <Text style={styles.title}>{article.title}</Text>
      {article.media[0] && (
        <Image
          source={article.media[0]["media-metadata"][0]}
          style={styles.image}
        />
      )}
      <Text style={styles.text}>{article.abstract}</Text>
      <Button
        title="Go to NY Times page"
        onPress={() => {
          Linking.openURL(article.url);
        }}
      />
      <TouchableOpacity style={styles.toggler} onPress={toggleHeight}>
        <Text style={styles.togglerText}>{isOpen ? "Ʌ" : "V"}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
