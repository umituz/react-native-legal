export class UrlHandlerService {
    static async openUrl(url) {
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
            }
            else {
                if (__DEV__) {
                    console.warn('UrlHandlerService: Cannot open URL', { url });
                }
            }
        }
        catch (error) {
            if (__DEV__) {
                console.error('UrlHandlerService: Error opening URL', { url, error });
            }
            throw error;
        }
    }
    static async canOpenUrl(url) {
        if (!url)
            return false;
        try {
            const { Linking } = await import('react-native');
            return await Linking.canOpenURL(url);
        }
        catch {
            return false;
        }
    }
}
//# sourceMappingURL=UrlHandlerService.js.map