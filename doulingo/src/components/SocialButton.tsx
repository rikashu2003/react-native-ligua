import { Pressable, StyleSheet, Text } from "react-native";

type SocialButtonProps = {
  label: string;
  onPress?: () => void;
};

export default function SocialButton({ label, onPress }: SocialButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#D3DBE6",
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  label: {
    color: "#101828",
    fontWeight: "600",
    fontSize: 15,
  },
});
