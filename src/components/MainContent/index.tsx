import React from "react";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";

import NewsArticle from "../NewsArticle";
import styles from "./styles";
import IMainContent from "./types";
import MenuBar from "../MenuBar";

const MainContent = ({ data, navigation }: IMainContent) => {
  return (
    <View style={styles.wrapper}>
      <MenuBar />
      <FlatList
        data={data}
        renderItem={(article) => <NewsArticle article={article.item} />}
        keyExtractor={(article) => `${article.id}`}
      />
    </View>
  );
};

const mapStateToProps = (state: { data: object }) => ({
  data: state.data,
});

export default connect(mapStateToProps)(MainContent);
