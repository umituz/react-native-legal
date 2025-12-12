/**
 * React Native Legal - Public API
 *
 * Legal screens for React Native apps
 *
 * Usage:
 *   import { TermsOfServiceScreen, PrivacyPolicyScreen, LegalScreen } from '@umituz/react-native-legal';
 */

export { TermsOfServiceScreen } from "./presentation/screens/TermsOfServiceScreen";
export type { TermsOfServiceScreenProps } from "./presentation/screens/TermsOfServiceScreen";

export { PrivacyPolicyScreen } from "./presentation/screens/PrivacyPolicyScreen";
export type { PrivacyPolicyScreenProps } from "./presentation/screens/PrivacyPolicyScreen";

export { LegalScreen } from "./presentation/screens/LegalScreen";
export type { LegalScreenProps } from "./presentation/screens/LegalScreen";

export { LegalItem } from "./presentation/components/LegalItem";
export type { LegalItemProps } from "./presentation/components/LegalItem";

export { LegalLinks } from "./presentation/components/LegalLinks";
export type { LegalLinksProps } from "./presentation/components/LegalLinks";

export { LegalSection } from "./presentation/components/LegalSection";
export type { LegalSectionProps } from "./presentation/components/LegalSection";
export type { LegalConfig } from "./domain/entities/LegalConfig";

export { UrlHandlerService } from "./domain/services/UrlHandlerService";
export { ContentValidationService } from "./domain/services/ContentValidationService";
export { StyleCacheService } from "./domain/services/StyleCacheService";
