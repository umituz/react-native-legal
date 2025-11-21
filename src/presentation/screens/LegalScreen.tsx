/**
 * Legal Screen Component
 * 
 * Single Responsibility: Layout and orchestration of legal documents list
 * Delegates item rendering to LegalItem component
 * 
 * All text content is passed as props (no localization dependency).
 */

import React from "react";
import { View, StyleSheet, Linking } from "react-native";
import { useAppDesignTokens, type DesignTokens } from "@umituz/react-native-design-system-theme";
import { AtomicText } from "@umituz/react-native-design-system-atoms";
import { ScreenLayout } from "@umituz/react-native-design-system";
import { LegalItem } from "../components/LegalItem";

export interface LegalScreenProps {
  /**
   * Title of the screen
   */
  title?: string;
  /**
   * Description/subtitle text
   */
  description?: string;
  /**
   * Header text for documents section
   */
  documentsHeader?: string;
  /**
   * Privacy Policy button text
   */
  privacyTitle?: string;
  /**
   * Privacy Policy description
   */
  privacyDescription?: string;
  /**
   * Terms of Service button text
   */
  termsTitle?: string;
  /**
   * Terms of Service description
   */
  termsDescription?: string;
  /**
   * EULA button text
   */
  eulaTitle?: string;
  /**
   * EULA description
   */
  eulaDescription?: string;
  /**
   * Callback when Privacy Policy is pressed
   */
  onPrivacyPress?: () => void;
  /**
   * Callback when Terms of Service is pressed
   */
  onTermsPress?: () => void;
  /**
   * Callback when EULA is pressed
   * If not provided, will open Apple EULA URL
   */
  onEulaPress?: () => void;
  /**
   * EULA URL (defaults to Apple's standard EULA)
   */
  eulaUrl?: string;
  /**
   * Test ID for E2E testing
   */
  testID?: string;
}

export const LegalScreen: React.FC<LegalScreenProps> = ({
  title = "Legal",
  description = "Legal documents and policies",
  documentsHeader = "Legal Documents",
  privacyTitle = "Privacy Policy",
  privacyDescription = "How we protect your privacy",
  termsTitle = "Terms of Service",
  termsDescription = "Terms and conditions of use",
  eulaTitle = "EULA",
  eulaDescription = "End User License Agreement",
  onPrivacyPress,
  onTermsPress,
  onEulaPress,
  eulaUrl = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
  testID = "legal-screen",
}) => {
  const tokens = useAppDesignTokens();
  const styles = getStyles(tokens);

  const handleEulaPress = async () => {
    if (onEulaPress) {
      onEulaPress();
    } else {
      await Linking.openURL(eulaUrl);
    }
  };

  return (
    <ScreenLayout testID={testID} hideScrollIndicator>
      {/* Header */}
      <View style={styles.header}>
        <AtomicText type="headlineLarge" color="textPrimary">
          {title}
        </AtomicText>
        {description && (
          <AtomicText
            type="bodyMedium"
            color="textSecondary"
            style={styles.headerSubtitle}
          >
            {description}
          </AtomicText>
        )}
      </View>

      {/* Legal Documents Section */}
      <View style={styles.section}>
        <AtomicText
          type="labelLarge"
          color="textSecondary"
          style={styles.sectionHeader}
        >
          {documentsHeader}
        </AtomicText>

        {/* Privacy Policy */}
        {onPrivacyPress && (
          <LegalItem
            iconName="Shield"
            title={privacyTitle}
            description={privacyDescription}
            onPress={onPrivacyPress}
            testID="privacy-policy-item"
          />
        )}

        {/* Terms of Service */}
        {onTermsPress && (
          <LegalItem
            iconName="FileText"
            title={termsTitle}
            description={termsDescription}
            onPress={onTermsPress}
            testID="terms-of-service-item"
          />
        )}

        {/* EULA */}
        <LegalItem
          iconName="ScrollText"
          title={eulaTitle}
          description={eulaDescription}
          onPress={handleEulaPress}
          testID="eula-item"
        />
      </View>
    </ScreenLayout>
  );
};

const getStyles = (tokens: DesignTokens) =>
  StyleSheet.create({
    header: {
      paddingBottom: tokens.spacing.lg,
      paddingTop: tokens.spacing.md,
    },
    headerSubtitle: {
      marginTop: tokens.spacing.xs,
    },
    section: {
      marginTop: tokens.spacing.md,
    },
    sectionHeader: {
      marginBottom: tokens.spacing.sm,
      paddingHorizontal: tokens.spacing.md,
    },
  });
