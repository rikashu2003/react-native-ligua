import { Link } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const logo = require("../../assets/assets/images/moscot-logo.png");
const hero = require("../../assets/assets/images/mascot-welcome.png");

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.pageContainer}>
        
        {/* Header */}
        <View style={styles.headerRow}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.brandText}>Akashungo</Text>
        </View>

        {/* Text */}
        <View style={styles.heroTextContainer}>
          <Text style={styles.title}>
            Your AI language
            <Text style={styles.titleAccent}> teacher.</Text>
          </Text>

          <Text style={styles.subtitle}>
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        {/* Hero Section */}
        <View style={styles.heroImageContainer}>
          <View style={[styles.speechBubble, styles.bubbleLeft]}>
            <Text style={styles.bubbleText}>Hello!</Text>
          </View>

          <View style={[styles.speechBubble, styles.bubbleTopRight]}>
            <Text style={styles.bubbleTextAccent}>¡Hola!</Text>
          </View>

          <View style={[styles.speechBubble, styles.bubbleBottomRight]}>
            <Text style={styles.bubbleTextAccentRed}>你好!</Text>
          </View>

          <Image
            source={hero}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        {/* Button */}
        <View style={{ marginTop: "auto" }}>
          <Link href="/" asChild>
            <View style={styles.getStartedButton}>
              <Text style={styles.getStartedText}>Get Started →</Text>
            </View>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  pageContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 30,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  logo: {
    width: 42,
    height: 42,
    marginRight: 10,
  },

  brandText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0D132B",
  },

  heroTextContainer: {
    marginTop: 25,
  },

  title: {
    fontSize: 42,
    fontWeight: "800",
    color: "#0D132B",
    lineHeight: 48,
  },

  titleAccent: {
    color: "#6C4EF5",
  },

  subtitle: {
    marginTop: 16,
    fontSize: 18,
    lineHeight: 28,
    color: "#6B7280",
  },

  heroImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  heroImage: {
    width: 260,
    height: 260,
  },

  speechBubble: {
    position: "absolute",
    backgroundColor: "#F3F6FF",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 3,
  },

  bubbleLeft: {
    top: 40,
    left: 0,
  },

  bubbleTopRight: {
    top: 60,
    right: 10,
  },

  bubbleBottomRight: {
    bottom: 60,
    right: 20,
    backgroundColor: "#FFF2F2",
  },

  bubbleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0D132B",
  },

  bubbleTextAccent: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4D8BFF",
  },

  bubbleTextAccentRed: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF4D4F",
  },

  getStartedButton: {
    width: "100%",
    height: 60,
    backgroundColor: "#6C4EF5",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  getStartedText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});