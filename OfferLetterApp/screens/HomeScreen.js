import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    if (navigation) {
      navigation.navigate("UploadScreen"); // or any other navigation action
    } else {
      console.log("Navigation prop not available");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>OfferLetter{"\u00A0"}AI</Text>
      <Text style={styles.subtitle}>
        Upload your offer letter to get a complete breakdown of your
        compensation and figure out if you are getting an offer thats best for
        you.
      </Text>
      <Button title="Get Started" onPress={handleGetStarted} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: "center",
    paddingHorizontal: 10,
  },
});

// If using PropTypes, you can make navigation optional:
// HomeScreen.propTypes = {
//   navigation: PropTypes.object,
// };

export default HomeScreen;
