import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import NewsArticle from "../NewsArticle";
import IMainContent from "./types";
import styles from "./styles";

const MainContent = ({ data }: IMainContent) => {
  return (
    <View style={styles.wrapper}>
      {data.map(article => (
        <NewsArticle article={article} key={article.id} />
      ))}
    </View>
  );
};

const mapStateToProps = (state: { data: object }) => ({
  data: state.data,
});

export default connect(mapStateToProps)(MainContent);
