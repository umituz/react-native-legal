/**
 * Type definitions for external dependencies
 * These are peer dependencies and will be resolved at runtime
 */

declare module '@umituz/react-native-design-system-theme' {
  export interface DesignTokens {
    colors: {
      backgroundPrimary: string;
      primary: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
      onSurface: string;
      secondary: string;
      info: string;
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  }

  export function useAppDesignTokens(): DesignTokens;
}

declare module '@umituz/react-native-design-system-atoms' {
  import React from 'react';
  import { ViewStyle, TextStyle } from 'react-native';

  export type IconName = string;

  export interface AtomicTextProps {
    type: 'headlineLarge' | 'bodyMedium' | 'bodyLarge' | 'bodySmall' | 'labelLarge' | 'labelSmall';
    color: string;
    style?: TextStyle;
    children: React.ReactNode;
  }

  export interface AtomicIconProps {
    name: IconName;
    size: 'sm' | 'md' | 'lg';
    color: string;
  }

  export interface AtomicButtonProps {
    variant: 'primary' | 'secondary';
    onPress: () => void;
    fullWidth?: boolean;
    style?: ViewStyle;
    children: React.ReactNode;
  }

  export const AtomicText: React.FC<AtomicTextProps>;
  export const AtomicIcon: React.FC<AtomicIconProps>;
  export const AtomicButton: React.FC<AtomicButtonProps>;
}

declare module '@umituz/react-native-design-system-organisms' {
  import React from 'react';
  import { ViewProps } from 'react-native';

  export interface ScreenLayoutProps extends ViewProps {
    hideScrollIndicator?: boolean;
  }

  export const ScreenLayout: React.FC<ScreenLayoutProps>;
}

declare module 'react-native-safe-area-context' {
  import { ViewStyle } from 'react-native';

  export interface SafeAreaInsets {
    top: number;
    bottom: number;
    left: number;
    right: number;
  }

  export function useSafeAreaInsets(): SafeAreaInsets;
}