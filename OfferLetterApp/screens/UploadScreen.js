import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as DocumentPicker from "expo-document-picker";

export default function UploadScreen() {
  const [document, setDocument] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // or restrict to "application/pdf"
        copyToCacheDirectory: true,
        multiple: false,
      });

      console.log("Document selected:", result);
      console.log("canceled:", result.canceled);

      if (!result.canceled) {
        // Extract the first asset from the assets array
        const selectedDoc =
          result.assets && result.assets.length > 0 ? result.assets[0] : null;
        setDocument(selectedDoc);
      } else {
        setDocument(null);
      }
    } catch (error) {
      console.error("Error picking document:", error);
    }
  };

  // Optional: use useEffect to log document changes
  useEffect(() => {
    console.log("Updated document state:", document);
  }, [document]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Upload Your Offer Letter</Text>
      {document ? (
        <View style={styles.documentContainer}>
          <Text style={styles.fileName}>Selected: {document.name}</Text>
          <Button title="Change Document" onPress={pickDocument} />
        </View>
      ) : (
        <Button title="Select Document" onPress={pickDocument} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  documentContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  fileName: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
});
