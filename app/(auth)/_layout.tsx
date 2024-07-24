import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();
  if (isSignedIn) {
    return <Redirect href="/home" />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: false,
          headerBackTitle: 'Homepage',
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: false,
          headerBackTitle: 'Homepage',
        }}
      />
    </Stack>
  );
}
