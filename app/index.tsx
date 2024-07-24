import LoginScreen from '@/components/LoginScreen';
import { Redirect } from 'expo-router';
import { Text, View } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';

export default function Index() {
  const { userId, sessionId } = useAuth();
  if (userId && sessionId) return <Redirect href="/home" />;
  return <LoginScreen />;
}
