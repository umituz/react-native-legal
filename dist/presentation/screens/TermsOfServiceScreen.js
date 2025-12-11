import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppDesignTokens } from "@umituz/react-native-design-system-theme";
import { AtomicText, AtomicButton } from "@umituz/react-native-design-system-atoms";
import { UrlHandlerService } from "../../domain/services/UrlHandlerService";
export const TermsOfServiceScreen = ({ content, url, title = "Terms of Service", viewOnlineText = "View Terms of Service online", openText = "Open Terms of Service", onUrlPress, testID = "terms-of-service-screen", }) => {
    const tokens = useAppDesignTokens();
    const insets = useSafeAreaInsets();
    const handleUrlPress = async () => {
        if (__DEV__) {
            console.log('TermsOfServiceScreen: URL pressed', { url });
        }
        if (onUrlPress) {
            onUrlPress();
        }
        else if (url) {
            await UrlHandlerService.openUrl(url);
        }
    };
    return (<View style={[
            styles.container,
            {
                backgroundColor: tokens.colors.backgroundPrimary,
                paddingTop: insets.top,
            },
        ]} testID={testID}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <AtomicText type="headlineLarge" color="primary" style={styles.title}>
            {title}
          </AtomicText>

          {content ? (<AtomicText type="bodyMedium" color="onSurface" style={styles.text}>
              {content}
            </AtomicText>) : (<View style={styles.urlContainer}>
              <AtomicText type="bodyMedium" color="secondary" style={styles.urlText}>
                {viewOnlineText}
              </AtomicText>
              <AtomicButton variant="primary" onPress={handleUrlPress} fullWidth style={styles.urlButton}>
                {openText}
              </AtomicButton>
            </View>)}
        </View>
      </ScrollView>
    </View>);
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
//# sourceMappingURL=TermsOfServiceScreen.js.map