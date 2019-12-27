import React, { useState } from "react";
import {
  Text,
  Image,
  Button,
  Linking,
  TouchableOpacity,
  Animated,
} from "react-native";

import INewsArticle from "./types";
import styles from "./styles";

export default ({ article }: INewsArticle) => {
  const initialHeight = 140;
  const [heightValue] = useState(new Animated.Value(initialHeight));
  const [maxHeight, setMaxHeight] = useState(0);

  const toggleHeight = () => {
    if (heightValue._value === maxHeight) {
      Animated.timing(heightValue, {
        toValue: initialHeight,
      }).start();
    } else {
      Animated.timing(heightValue, {
        toValue: maxHeight,
      }).start();
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
      <Image
        source={article.media[0]["media-metadata"][0]}
        style={styles.image}
      />
      <Text style={styles.text}>{article.abstract}</Text>
      <Button
        title="Go to NY Times page"
        onPress={() => {
          Linking.openURL(article.url);
        }}
      />
      <TouchableOpacity style={styles.toggler} onPress={toggleHeight}>
        <Text style={styles.togglerText}>V</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
