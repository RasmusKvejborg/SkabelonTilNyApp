import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "../../GlobalStyles.js";

export default function DriveScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headlineText}>Skriv HTML her</Text>

      <Text style={styles.itemStyleLargeText}>ja forhelved</Text>
    </View>
  );
}
