import { StyleSheet, Text, View, useColorScheme } from "react-native";

export default function ExplorePage() {
  const colorSchema = useColorScheme();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={colorSchema === "light" ? styles.title : styles.titleDark}>
          Explore page
        </Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  titleDark: {
    fontSize: 64,
    fontWeight: "bold",
    color: "white",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
