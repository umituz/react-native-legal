import React from "react";
export interface LegalScreenProps {
    title?: string;
    description?: string;
    documentsHeader?: string;
    privacyTitle?: string;
    privacyDescription?: string;
    termsTitle?: string;
    termsDescription?: string;
    eulaTitle?: string;
    eulaDescription?: string;
    onPrivacyPress?: () => void;
    onTermsPress?: () => void;
    onEulaPress?: () => void;
    eulaUrl?: string;
    testID?: string;
}
export declare const LegalScreen: React.FC<LegalScreenProps>;
//# sourceMappingURL=LegalScreen.d.ts.map