import { useCallback } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function SignUpScreen() {
	useWarmUpBrowser();
	const { startOAuthFlow } = useOAuth({ strategy: 'oauth_apple' });

	const onPress = useCallback(async () => {
		try {
			const { createdSessionId, setActive, signUp } = await startOAuthFlow();

			if (createdSessionId) {
				setActive({ session: createdSessionId });
			} else {
				console.log('failed to sign in or sign up');
			}
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<Button
			onPress={onPress}
			title='Sign in with apple'
		/>
	);
}
