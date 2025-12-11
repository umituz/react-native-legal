import React from "react";
import type { IconName } from "@umituz/react-native-design-system-atoms";
export interface LegalItemProps {
    iconName?: IconName;
    icon?: string;
    title: string;
    description?: string;
    onPress?: () => void;
    testID?: string;
}
export declare const LegalItem: React.FC<LegalItemProps>;
//# sourceMappingURL=LegalItem.d.ts.map