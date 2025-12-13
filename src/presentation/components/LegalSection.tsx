import React from 'react';
import { View, Text, Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAppDesignTokens } from '@umituz/react-native-design-system-theme';
import { useLocalization } from '@umituz/react-native-localization';
import { LegalConfig } from '../../domain/entities/LegalConfig';

export interface LegalSectionProps {
    config?: LegalConfig;
    onPress?: () => void;
    containerStyle?: ViewStyle;
}

export const LegalSection: React.FC<LegalSectionProps> = ({
    config,
    onPress,
    containerStyle,
}) => {
    const navigation = useNavigation();
    const tokens = useAppDesignTokens();
    const { t } = useLocalization();
    const colors = tokens.colors;

    const route = config?.route || config?.defaultRoute || 'Legal';
    const title = config?.title || t('settings.legal.title');
    const description = config?.description || t('settings.legal.description');

    const handlePress = () => {
        if (onPress) {
            onPress();
        } else {
            navigation.navigate(route as never);
        }
    };

    return (
        <View style={[styles.sectionContainer, { backgroundColor: colors.surface }, containerStyle]}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>{t('settings.legal.title')}</Text>
            <Pressable
                style={({ pressed }) => [
                    styles.itemContainer,
                    {
                        backgroundColor: pressed ? `${colors.primary}08` : 'transparent',
                    },
                ]}
                onPress={handlePress}
            >
                <View style={styles.content}>
                    <View
                        style={[
                            styles.iconContainer,
                            { backgroundColor: `${colors.primary}15` },
                        ]}
                    >
                        <Feather name="file-text" size={24} color={colors.primary} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.title, { color: colors.textPrimary }]}>{title}</Text>
                        <Text style={[styles.description, { color: colors.textSecondary }]}>
                            {description}
                        </Text>
                    </View>
                    <Feather name="chevron-right" size={20} color={colors.textSecondary} />
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginBottom: 16,
        borderRadius: 12,
        overflow: 'hidden',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        minHeight: 72,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
        marginRight: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
    },
});
