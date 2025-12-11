import React from "react";
import { View, StyleSheet } from "react-native";
import { useAppDesignTokens } from "@umituz/react-native-design-system-theme";
import { AtomicText } from "@umituz/react-native-design-system-atoms";
import { ScreenLayout } from "@umituz/react-native-design-system-organisms";
import { LegalItem } from "../components/LegalItem";
import { UrlHandlerService } from "../../domain/services/UrlHandlerService";
export const LegalScreen = ({ title, description, documentsHeader, privacyTitle, privacyDescription, termsTitle, termsDescription, eulaTitle, eulaDescription, onPrivacyPress, onTermsPress, onEulaPress, eulaUrl, testID = "legal-screen", }) => {
    const tokens = useAppDesignTokens();
    const styles = getStyles(tokens);
    const handleEulaPress = async () => {
        if (__DEV__) {
            console.log('LegalScreen: EULA pressed', { eulaUrl });
        }
        if (onEulaPress) {
            onEulaPress();
        }
        else if (eulaUrl) {
            await UrlHandlerService.openUrl(eulaUrl);
        }
    };
    return (<ScreenLayout testID={testID} hideScrollIndicator>
      
      {title && (<View style={styles.header}>
          <AtomicText type="headlineLarge" color="textPrimary">
            {title}
          </AtomicText>
          {description && (<AtomicText type="bodyMedium" color="textSecondary" style={styles.headerSubtitle}>
              {description}
            </AtomicText>)}
        </View>)}

      
      <View style={styles.section}>
        {documentsHeader && (<AtomicText type="labelLarge" color="textSecondary" style={styles.sectionHeader}>
            {documentsHeader}
          </AtomicText>)}

        
        {onPrivacyPress && privacyTitle && (<LegalItem iconName="Shield" title={privacyTitle} description={privacyDescription} onPress={onPrivacyPress} testID="privacy-policy-item"/>)}

        
        {onTermsPress && termsTitle && (<LegalItem iconName="FileText" title={termsTitle} description={termsDescription} onPress={onTermsPress} testID="terms-of-service-item"/>)}

        
        {(onEulaPress || eulaUrl) && eulaTitle && (<LegalItem iconName="ScrollText" title={eulaTitle} description={eulaDescription} onPress={handleEulaPress} testID="eula-item"/>)}
      </View>
    </ScreenLayout>);
};
const getStyles = (tokens) => StyleSheet.create({
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
//# sourceMappingURL=LegalScreen.js.map