/**
 * LegalLinks Component
 * Single Responsibility: Display Privacy Policy and Terms of Service links
 * Required for App Store compliance in paywall screens
 */

import React from "react";
import { View, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { AtomicText } from "@umituz/react-native-design-system-atoms";
import { useAppDesignTokens } from "@umituz/react-native-design-system-theme";
import { useLocalization } from "@umituz/react-native-localization";

export interface LegalLinksProps {
  privacyPolicyUrl?: string;
  termsOfServiceUrl?: string;
  style?: object;
}

const DEFAULT_PRIVACY_URL = "https://vivoim.app/privacy";
const DEFAULT_TERMS_URL = "https://vivoim.app/terms";

export const LegalLinks: React.FC<LegalLinksProps> = React.memo(
  ({
    privacyPolicyUrl = DEFAULT_PRIVACY_URL,
    termsOfServiceUrl = DEFAULT_TERMS_URL,
    style,
  }) => {
    const tokens = useAppDesignTokens();
    const { t } = useLocalization();

    const handlePrivacyPress = () => {
      Linking.openURL(privacyPolicyUrl);
    };

    const handleTermsPress = () => {
      Linking.openURL(termsOfServiceUrl);
    };

    return (
      <View style={[styles.container, style]}>
        <TouchableOpacity onPress={handlePrivacyPress} hitSlop={styles.hitSlop}>
          <AtomicText
            type="labelSmall"
            style={[styles.link, { color: tokens.colors.primary }]}
          >
            {t("legal.privacyPolicy", "Privacy Policy")}
          </AtomicText>
        </TouchableOpacity>
        <AtomicText
          type="labelSmall"
          style={{ color: tokens.colors.textTertiary }}
        >
          {" • "}
        </AtomicText>
        <TouchableOpacity onPress={handleTermsPress} hitSlop={styles.hitSlop}>
          <AtomicText
            type="labelSmall"
            style={[styles.link, { color: tokens.colors.primary }]}
          >
            {t("legal.termsOfService", "Terms of Service")}
          </AtomicText>
        </TouchableOpacity>
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
