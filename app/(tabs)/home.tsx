import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@clerk/clerk-expo';
import { Redirect, router } from 'expo-router';

const Home = () => {
  const { signOut } = useAuth();
  const logout = async () => {
    await signOut();
    router.replace('sign-in')
  };
  return (
    <SafeAreaView style={{ padding: 5 }}>
      <TouchableOpacity onPress={logout} style={{ 
        backgroundColor: 'red',
        width: 100,
        alignItems: 'center',
       }}>
        <Text style={{ color: '#fff' }}>Sign Out</Text>
      </TouchableOpacity>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
