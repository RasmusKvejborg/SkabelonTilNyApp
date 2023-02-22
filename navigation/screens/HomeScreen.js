import { StatusBar } from "expo-status-bar";

import * as React from "react";
import { Text, View } from "react-native";
import { styles } from "../../GlobalStyles.js";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.headlineText}>Skriv HTML her</Text>
      <Text style={styles.headlineText}>Skriv HTML her</Text>
      <Text style={styles.headlineText}>Skriv HTML her</Text>
      <Text style={styles.headlineText}>Skriv HTML her</Text>
      <Text style={styles.headlineText}>Skriv HTML her</Text>
      <Text style={styles.headlineText}>Skriv HTML her</Text>
      <Text style={styles.headlineText}>Skriv HTML her</Text>
    </View>
  );
}
