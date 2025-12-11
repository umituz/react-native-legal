/**
 * LegalLinks Component
 * Single Responsibility: Display Privacy Policy and Terms of Service links
 * Required for App Store compliance in paywall screens
 */

import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AtomicText } from "@umituz/react-native-design-system-atoms";

export interface LegalLinksProps {
  /**
   * Privacy Policy URL
   */
  privacyPolicyUrl?: string;
  /**
   * Terms of Service URL
   */
  termsOfServiceUrl?: string;
  /**
   * Privacy Policy link text
   */
  privacyText?: string;
  /**
   * Terms of Service link text
   */
  termsText?: string;
  /**
   * Callback when Privacy Policy is pressed
   */
  onPrivacyPress?: () => void;
  /**
   * Callback when Terms of Service is pressed
   */
  onTermsPress?: () => void;
  /**
   * Additional styles
   */
  style?: object;
}

export const LegalLinks: React.FC<LegalLinksProps> = React.memo(
  ({
    privacyPolicyUrl,
    termsOfServiceUrl,
    privacyText = "Privacy Policy",
    termsText = "Terms of Service",
    onPrivacyPress,
    onTermsPress,
    style,
  }) => {
    const handlePrivacyPress = async () => {
      if (onPrivacyPress) {
        onPrivacyPress();
      } else if (privacyPolicyUrl) {
        const { UrlHandlerService } = await import('../../domain/services/UrlHandlerService');
        await UrlHandlerService.openUrl(privacyPolicyUrl);
      }
    };

    const handleTermsPress = async () => {
      if (onTermsPress) {
        onTermsPress();
      } else if (termsOfServiceUrl) {
        const { UrlHandlerService } = await import('../../domain/services/UrlHandlerService');
        await UrlHandlerService.openUrl(termsOfServiceUrl);
      }
    };

    return (
      <View style={[styles.container, style]}>
        {(onPrivacyPress || privacyPolicyUrl) && (
          <TouchableOpacity onPress={handlePrivacyPress} hitSlop={styles.hitSlop}>
            <AtomicText
              type="labelSmall"
              color="primary"
              style={styles.link}
            >
              {privacyText}
            </AtomicText>
          </TouchableOpacity>
        )}
        {(onPrivacyPress || privacyPolicyUrl) && (onTermsPress || termsOfServiceUrl) && (
          <AtomicText
            type="labelSmall"
            color="textTertiary"
          >
            {" • "}
          </AtomicText>
        )}
        {(onTermsPress || termsOfServiceUrl) && (
          <TouchableOpacity onPress={handleTermsPress} hitSlop={styles.hitSlop}>
            <AtomicText
              type="labelSmall"
              color="primary"
              style={styles.link}
            >
              {termsText}
            </AtomicText>
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

LegalLinks.displayName = "LegalLinks";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    textDecorationLine: "underline",
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
});
