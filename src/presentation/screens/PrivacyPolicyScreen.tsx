/**
 * Privacy Policy Screen Component
 * Display Privacy Policy content
 */

import React from "react";
import { View, ScrollView, StyleSheet, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppDesignTokens } from "@umituz/react-native-theme";
import { useLocalization } from "@umituz/react-native-localization";
import { AtomicText, AtomicButton } from "@umituz/react-native-design-system";

export interface PrivacyPolicyScreenProps {
  /**
   * Privacy Policy content (HTML or plain text)
   */
  content?: string;
  /**
   * Privacy Policy URL (if content is not provided, will open URL)
   */
  url?: string;
  /**
   * Custom title
   */
  title?: string;
  /**
   * Callback when URL is pressed (if content is not provided)
   */
  onUrlPress?: () => void;
}

export const PrivacyPolicyScreen: React.FC<PrivacyPolicyScreenProps> = ({
  content,
  url,
  title,
  onUrlPress,
}) => {
  const tokens = useAppDesignTokens();
  const { t } = useLocalization();
  const insets = useSafeAreaInsets();

  const handleUrlPress = async () => {
    if (onUrlPress) {
      onUrlPress();
    } else if (url) {
      await Linking.openURL(url);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: tokens.colors.backgroundPrimary,
          paddingTop: insets.top,
        },
      ]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <AtomicText
            type="headlineLarge"
            color="primary"
            style={styles.title}
          >
            {title || t("legal.privacyPolicy") || "Privacy Policy"}
          </AtomicText>

          {content ? (
            <AtomicText type="bodyMedium" color="onSurface" style={styles.text}>
              {content}
            </AtomicText>
          ) : (
            <View style={styles.urlContainer}>
              <AtomicText
                type="bodyMedium"
                color="secondary"
                style={styles.urlText}
              >
                {t("legal.viewPrivacyOnline") || "View Privacy Policy online"}
              </AtomicText>
              <AtomicButton
                variant="primary"
                onPress={handleUrlPress}
                fullWidth
                style={styles.urlButton}
              >
                {t("legal.openPrivacy") || "Open Privacy Policy"}
              </AtomicButton>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  content: {
    flex: 1,
  },
  title: {
    marginBottom: 24,
  },
  text: {
    lineHeight: 24,
  },
  urlContainer: {
    marginTop: 32,
    alignItems: "center",
  },
  urlText: {
    marginBottom: 16,
    textAlign: "center",
  },
  urlButton: {
    marginTop: 8,
  },
});

