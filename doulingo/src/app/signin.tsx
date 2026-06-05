import { Link } from "expo-router";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "expo-router";

function VerificationModal({
  visible,
  onClose,
  onComplete,
  email,
}: {
  visible: boolean;
  onClose: () => void;
  onComplete: (code: string) => void;
  email?: string;
}) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput | null>(null);

  useEffect(() => {
    if (visible) {
      setCode("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [visible]);

  useEffect(() => {
    if (code.length === 6) {
      onComplete(code);
      setTimeout(() => {
        onClose();
        router.push("/");
      }, 150);
    }
  }, [code, onClose, onComplete, router]);

  const displayDigits = useMemo(
    () => code.padEnd(6, "").split("").map((digit, index) => ({ digit, index })),
    [code]
  );

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <KeyboardAvoidingView
        style={styles.modalWrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Check your email</Text>
            <Pressable onPress={onClose} style={styles.modalCloseIcon}>
              <Text style={styles.modalCloseText}>✕</Text>
            </Pressable>
          </View>

          <Text style={styles.modalSubtitle}>
            We sent a 6-digit code to {email ? email : "email"}
          </Text>

          <View style={styles.codeRow}>
            {displayDigits.map(({ digit, index }) => (
              <View
                key={index}
                style={[
                  styles.codeBox,
                  digit ? styles.codeBoxFilled : null,
                ]}
              >
                <Text
                  style={[
                    styles.codeBoxText,
                    digit ? styles.codeBoxFilledText : null,
                  ]}
                >
                  {digit}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.resendRow}>
            <Text style={styles.resendText}>Didn't receive it?</Text>
            <Pressable onPress={() => {}}>
              <Text style={[styles.resendText, styles.resendLink]}>Resend</Text>
            </Pressable>
          </View>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={(value) => {
              const sanitized = value.replace(/[^0-9]/g, "");
              if (sanitized.length <= 6) {
                setCode(sanitized);
              }
            }}
            keyboardType="number-pad"
            returnKeyType="done"
            textContentType="oneTimeCode"
            maxLength={6}
            style={styles.hiddenInput}
            autoFocus
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.pageContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <View>
            <Text style={styles.screenTitle}>Welcome back</Text>
            <Text style={styles.screenSubtitle}>
              Sign in with your email or continue with one of the providers below.
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="you@example.com"
                placeholderTextColor="#A1A5B8"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>

            <Pressable
              style={styles.primaryButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.primaryButtonText}>Send code</Text>
            </Pressable>

            <Text style={styles.dividerText}>or continue with</Text>

            <View style={styles.socialRow}>
              <Pressable style={styles.socialButton}>
                <Text style={styles.socialButtonText}>Continue with Google</Text>
              </Pressable>
              <Pressable style={styles.socialButton}>
                <Text style={styles.socialButtonText}>Continue with Apple</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.switchPrompt}>New here? </Text>
          <Link href={{ pathname: "/signup" }} asChild>
            <Pressable style={styles.switchLink}>
              <Text style={styles.switchLinkText}>Sign up</Text>
            </Pressable>
          </Link>
        </View>

        <VerificationModal
          visible={modalVisible}
          email={email}
          onClose={() => setModalVisible(false)}
          onComplete={() => {
            /* no-op; router handling inside modal */
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFF",
  },
  pageContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    gap: 24,
  },
  screenTitle: {
    fontSize: 34,
    lineHeight: 42,
    fontWeight: "800",
    color: "#101828",
  },
  screenSubtitle: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 24,
    color: "#667085",
  },
  form: {
    gap: 18,
  },
  fieldGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#101828",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#D3DBE6",
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    color: "#0F172A",
    fontSize: 16,
  },
  primaryButton: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#5B6FFA",
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
  dividerText: {
    textAlign: "center",
    color: "#667085",
    fontSize: 14,
  },
  socialRow: {
    gap: 12,
  },
  socialButton: {
    width: "100%",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#D3DBE6",
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  socialButtonText: {
    color: "#101828",
    fontWeight: "600",
    fontSize: 15,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  switchPrompt: {
    color: "#667085",
    fontSize: 15,
  },
  switchLink: {
    padding: 4,
  },
  switchLinkText: {
    color: "#5B6FFA",
    fontWeight: "700",
    fontSize: 15,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(15, 23, 42, 0.35)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 32,
  },
  modalTitle: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "800",
    color: "#101828",
  },
  modalSubtitle: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: "#667085",
  },
  codeRow: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  codeBox: {
    flex: 1,
    minHeight: 62,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#D3DBE6",
    backgroundColor: "#F8FAFF",
    justifyContent: "center",
    alignItems: "center",
  },
  codeBoxText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#101828",
  },
  hiddenInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },
  modalClose: {
    marginTop: 24,
    alignItems: "center",
  },
  modalCloseText: {
    color: "#5B6FFA",
    fontSize: 16,
    fontWeight: "700",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  modalCloseIcon: {
    padding: 8,
  },
  codeBoxFilled: {
    borderColor: "#5B6FFA",
    backgroundColor: "#FFFFFF",
  },
  codeBoxFilledText: {
    color: "#5B6FFA",
  },
  resendRow: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  resendText: {
    fontSize: 14,
    color: "#667085",
  },
  resendLink: {
    color: "#5B6FFA",
    fontWeight: "700",
  },
});