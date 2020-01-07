import React, { useEffect } from "react";
import { connect } from "react-redux";

import MainContent from "../../components/MainContent";
import { fetchData } from "../../redux/actions";

const MainScreen = ({ fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return <MainContent />;
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
