import { StyleSheet } from "react-native";

export default StyleSheet.create({
  checkbox: {
    marginRight: 12
  },
  container: {
    flex: 1
  },
  deleteIcon: {
    bottom: 0,
    justifyContent: "center",
    margin: 0,
    position: "absolute",
    right: 26,
    top: 0,
    zIndex: -1
  },
  disabled: {
    textDecorationLine: "line-through"
  },
  editIcon: {
    bottom: 0,
    justifyContent: "center",
    // right: 70,
    left: 26,
    margin: 0,
    position: "absolute",
    top: 0,
    zIndex: -1
  },
  label: {
    flexShrink: 1,
    marginBottom: 4
  },
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 4
  }
});
