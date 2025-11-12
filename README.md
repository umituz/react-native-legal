# @umituz/react-native-legal

Legal screens for React Native apps - Terms of Service and Privacy Policy.

## Installation

```bash
npm install @umituz/react-native-legal
```

## Peer Dependencies

- `react` >= 18.2.0
- `react-native` >= 0.74.0
- `@umituz/react-native-design-system`
- `@umituz/react-native-theme`
- `@umituz/react-native-localization`
- `react-native-safe-area-context` >= 4.0.0

## Usage

### Terms of Service Screen

```tsx
import { TermsOfServiceScreen } from '@umituz/react-native-legal';

function MyTermsScreen() {
  return (
    <TermsOfServiceScreen
      url="https://example.com/terms"
      // or
      content="Your terms of service content here..."
    />
  );
}
```

### Privacy Policy Screen

```tsx
import { PrivacyPolicyScreen } from '@umituz/react-native-legal';

function MyPrivacyScreen() {
  return (
    <PrivacyPolicyScreen
      url="https://example.com/privacy"
      // or
      content="Your privacy policy content here..."
    />
  );
}
```

## Props

### TermsOfServiceScreen

| Prop | Type | Description |
|------|------|-------------|
| `content` | `string` | Terms of Service content (HTML or plain text) |
| `url` | `string` | Terms of Service URL (if content is not provided) |
| `title` | `string` | Custom title |
| `onUrlPress` | `() => void` | Callback when URL is pressed |

### PrivacyPolicyScreen

| Prop | Type | Description |
|------|------|-------------|
| `content` | `string` | Privacy Policy content (HTML or plain text) |
| `url` | `string` | Privacy Policy URL (if content is not provided) |
| `title` | `string` | Custom title |
| `onUrlPress` | `() => void` | Callback when URL is pressed |

## Localization

The component uses `@umituz/react-native-localization` for translations. Add these keys to your translation files:

```json
{
  "legal": {
    "termsOfService": "Terms of Service",
    "privacyPolicy": "Privacy Policy",
    "viewTermsOnline": "View Terms of Service online",
    "viewPrivacyOnline": "View Privacy Policy online",
    "openTerms": "Open Terms of Service",
    "openPrivacy": "Open Privacy Policy"
  }
}
```

## License

MIT




