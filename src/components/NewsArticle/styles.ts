import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

export default StyleSheet.create({
  image: {
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    width: "100%",
    marginBottom: 20,
  },
  wrapper: {
    paddingTop: 30,
    paddingBottom: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.toggler,
    marginBottom: 20,
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  title: {
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
  toggler: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.toggler,
    position: "absolute",
    width: "100%",
    bottom: 0,
    opacity: 0.4,
    borderRadius: 5,
    alignSelf: "center",
  },
  togglerText: {
    color: colors.lightText,
    fontSize: 25,
  },
});
