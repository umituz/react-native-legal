import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useAppDesignTokens } from "@umituz/react-native-design-system-theme";
import { AtomicText, AtomicIcon } from "@umituz/react-native-design-system-atoms";
export const LegalItem = ({ iconName, icon, title, description, onPress, testID, }) => {
    const tokens = useAppDesignTokens();
    const styles = getStyles(tokens);
    const renderIcon = () => {
        if (iconName) {
            return (<AtomicIcon name={iconName} size="md" color="info"/>);
        }
        if (icon) {
            return (<AtomicText type="bodyLarge" color="info">
          {icon}
        </AtomicText>);
        }
        return null;
    };
    const content = (<View style={styles.itemContent}>
      <View style={styles.itemLeft}>
        <View style={[styles.iconContainer, { backgroundColor: tokens.colors.info + "20" }]}>
          {renderIcon()}
        </View>
        <View style={styles.itemText}>
          <AtomicText type="bodyLarge" color="textPrimary">
            {title}
          </AtomicText>
          {description && (<AtomicText type="bodySmall" color="textSecondary" style={styles.itemDescription}>
              {description}
            </AtomicText>)}
        </View>
      </View>
      {onPress && (<AtomicText type="bodyMedium" color="textSecondary">›</AtomicText>)}
    </View>);
    if (onPress) {
        return (<TouchableOpacity style={styles.itemContainer} onPress={onPress} testID={testID} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>);
    }
    return (<View style={styles.itemContainer} testID={testID}>
      {content}
    </View>);
};
const getStyles = (tokens) => StyleSheet.create({
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
//# sourceMappingURL=LegalItem.js.map