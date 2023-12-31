import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import SignUpScreen from './screens/SignUp.screen';

export default function App() {
	return (
		<ClerkProvider
			publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
		>
			<SafeAreaView styles={styles.container}>
				<SignedIn>
					<Text>You are Signed in</Text>
				</SignedIn>
				<SignedOut>
					<SignUpScreen />
				</SignedOut>
			</SafeAreaView>
		</ClerkProvider>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
