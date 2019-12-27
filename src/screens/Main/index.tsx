import React, { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { connect } from "react-redux";

import { fetchData } from "../../redux/actions";
import MainContent from "../../components/MainContent";

const MainScreen = ({ data, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <MainContent />
    </ScrollView>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
