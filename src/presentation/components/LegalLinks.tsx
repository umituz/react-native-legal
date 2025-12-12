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
    // Cache UrlHandlerService import to prevent repeated imports
    const urlServiceRef = React.useRef<any>(null);
    
    const getUrlService = React.useCallback(async () => {
      if (!urlServiceRef.current) {
        urlServiceRef.current = await import('../../domain/services/UrlHandlerService');
      }
      return urlServiceRef.current;
    }, []);

    // Memoize press handlers to prevent child re-renders
    const handlePrivacyPress = React.useCallback(async () => {
      if (onPrivacyPress) {
        onPrivacyPress();
      } else if (privacyPolicyUrl) {
        try {
          const { UrlHandlerService } = await getUrlService();
          await UrlHandlerService.openUrl(privacyPolicyUrl);
        } catch (error) {
          if (__DEV__) {
            console.error('LegalLinks: Error opening privacy policy URL', error);
          }
        }
      }
    }, [onPrivacyPress, privacyPolicyUrl, getUrlService]);

    const handleTermsPress = React.useCallback(async () => {
      if (onTermsPress) {
        onTermsPress();
      } else if (termsOfServiceUrl) {
        try {
          const { UrlHandlerService } = await getUrlService();
          await UrlHandlerService.openUrl(termsOfServiceUrl);
        } catch (error) {
          if (__DEV__) {
            console.error('LegalLinks: Error opening terms of service URL', error);
          }
        }
      }
    }, [onTermsPress, termsOfServiceUrl, getUrlService]);

    // Memoize conditional rendering to prevent unnecessary re-renders
    const showPrivacy = React.useMemo(() => !!(onPrivacyPress || privacyPolicyUrl), [onPrivacyPress, privacyPolicyUrl]);
    const showTerms = React.useMemo(() => !!(onTermsPress || termsOfServiceUrl), [onTermsPress, termsOfServiceUrl]);
    const showSeparator = React.useMemo(() => showPrivacy && showTerms, [showPrivacy, showTerms]);

    return (
      <View style={[styles.container, style]}>
        {showPrivacy && (
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
        {showSeparator && (
          <AtomicText
            type="labelSmall"
            color="textTertiary"
          >
            {" • "}
          </AtomicText>
        )}
        {showTerms && (
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
