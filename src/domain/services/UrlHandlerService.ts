/**
 * URL Handler Service
 * Single Responsibility: Handle URL operations
 * Extracted from screens to follow SOLID principles
 */

export class UrlHandlerService {
  /**
   * Open URL in external browser
   */
  static async openUrl(url: string): Promise<void> {
    if (__DEV__) {
      console.log('UrlHandlerService: Opening URL', { url });
    }

    if (!url) {
      if (__DEV__) {
        console.warn('UrlHandlerService: No URL provided');
      }
      return;
    }

    try {
      const { Linking } = await import('react-native');
      const supported = await Linking.canOpenURL(url);
      
      if (supported) {
        await Linking.openURL(url);
      } else {
        if (__DEV__) {
          console.warn('UrlHandlerService: Cannot open URL', { url });
        }
      }
    } catch (error) {
      if (__DEV__) {
        console.error('UrlHandlerService: Error opening URL', { url, error });
      }
      throw error;
    }
  }

  /**
   * Check if URL can be opened
   */
  static async canOpenUrl(url: string): Promise<boolean> {
    if (!url) return false;

    try {
      const { Linking } = await import('react-native');
      return await Linking.canOpenURL(url);
    } catch {
      return false;
    }
  }
}