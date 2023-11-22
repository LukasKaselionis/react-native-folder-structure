import { FlexStyle, StyleSheet, Text, View } from "react-native";

interface StyleInterface {
  container: FlexStyle;
}

const styles: StyleInterface = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

export default App;
