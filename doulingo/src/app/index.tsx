import { Link } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Welcome back</Text>
        <Text style={styles.welcomeSubtitle}>
          Start your next lesson with the onboarding experience.
        </Text>
      </View>

      <Link href="/onboarding" style={styles.linkButton}>
        <Text style={styles.linkButtonText}>Open onboarding</Text>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#F8FAFF",
  },
  container: {
    width: "100%",
    maxWidth: 480,
    alignItems: "center",
    gap: 14,
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "700",
    color: "#0D132B",
    textAlign: "center",
  },
  welcomeSubtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#6B7280",
    textAlign: "center",
  },
  linkButton: {
    width: "100%",
    maxWidth: 380,
    paddingVertical: 16,
    borderRadius: 18,
    backgroundColor: "#6C4EF5",
    alignItems: "center",
    justifyContent: "center",
  },
  linkButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
