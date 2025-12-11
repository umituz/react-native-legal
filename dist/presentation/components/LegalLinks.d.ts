import React from "react";
export interface LegalLinksProps {
    privacyPolicyUrl?: string;
    termsOfServiceUrl?: string;
    privacyText?: string;
    termsText?: string;
    onPrivacyPress?: () => void;
    onTermsPress?: () => void;
    style?: object;
}
export declare const LegalLinks: React.FC<LegalLinksProps>;
//# sourceMappingURL=LegalLinks.d.ts.map