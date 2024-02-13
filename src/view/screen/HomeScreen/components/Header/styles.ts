import { StyleSheet } from "react-native";

export default StyleSheet.create({
  row: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between"
  },
  wrapper: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    left: 0,
    paddingHorizontal: 16,
    paddingVertical: 16,
    position: "absolute",
    right: 0,
    zIndex: 999
  }
});
