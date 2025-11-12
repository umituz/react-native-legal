/**
 * LegalItem Component
 * 
 * Single Responsibility: Display a single legal document item
 * Reusable component for Privacy Policy, Terms of Service, and EULA items
 */

import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useAppDesignTokens } from "@umituz/react-native-design-system-theme";
import { AtomicText, AtomicIcon } from "@umituz/react-native-design-system";
import type { DesignTokens } from "@umituz/react-native-design-system";
import type { IconName } from "@umituz/react-native-design-system";

export interface LegalItemProps {
  /**
   * Icon name from Lucide library (e.g., "Shield", "FileText", "ScrollText")
   * If not provided, will use emoji icon
   */
  iconName?: IconName;
  /**
   * Icon emoji or text (fallback if iconName not provided)
   */
  icon?: string;
  /**
   * Title text
   */
  title: string;
  /**
   * Optional description text
   */
  description?: string;
  /**
   * Callback when item is pressed
   */
  onPress?: () => void;
  /**
   * Test ID for E2E testing
   */
  testID?: string;
}

export const LegalItem: React.FC<LegalItemProps> = ({
  iconName,
  icon,
  title,
  description,
  onPress,
  testID,
}) => {
  const tokens = useAppDesignTokens();
  const styles = getStyles(tokens);

  const renderIcon = () => {
    if (iconName) {
      return (
        <AtomicIcon
          name={iconName}
          size="md"
          color="info"
        />
      );
    }
    if (icon) {
      return (
        <AtomicText type="bodyLarge" color="info">
          {icon}
        </AtomicText>
      );
    }
    return null;
  };

  const content = (
    <View style={styles.itemContent}>
      <View style={styles.itemLeft}>
        <View style={[styles.iconContainer, { backgroundColor: tokens.colors.info + "20" }]}>
          {renderIcon()}
        </View>
        <View style={styles.itemText}>
          <AtomicText type="bodyLarge" color="textPrimary">
            {title}
          </AtomicText>
          {description && (
            <AtomicText
              type="bodySmall"
              color="textSecondary"
              style={styles.itemDescription}
            >
              {description}
            </AtomicText>
          )}
        </View>
      </View>
      {onPress && (
        <AtomicText type="bodyMedium" color="textSecondary">›</AtomicText>
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={onPress}
        testID={testID}
        activeOpacity={0.7}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.itemContainer} testID={testID}>
      {content}
    </View>
  );
};

const getStyles = (tokens: DesignTokens) =>
  StyleSheet.create({
    itemContainer: {
      marginBottom: tokens.spacing.xs,
    },
    itemContent: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: tokens.spacing.md,
      paddingVertical: tokens.spacing.md,
      minHeight: 64,
    },
    itemLeft: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    iconContainer: {
      width: 44,
      height: 44,
      borderRadius: 22,
      alignItems: "center",
      justifyContent: "center",
      marginRight: tokens.spacing.md,
    },
    itemText: {
      flex: 1,
    },
    itemDescription: {
      marginTop: tokens.spacing.xs,
    },
  });

