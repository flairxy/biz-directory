import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@clerk/clerk-expo';
import { Redirect, router } from 'expo-router';
import Header from '@/components/home/Header';
import { Colors } from '@/constants/Colors';
import Slider from '@/components/home/Slider';
import Category from '@/components/home/Category';
import PopularBusiness from '@/components/home/PopularBusiness';

const Home = () => {
  const { signOut } = useAuth();
  const logout = async () => {
    await signOut();
    router.replace('sign-in');
  };
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Colors.primary,
          flex: 0,
        }}
      />
      <Header />
      <ScrollView>
        <Slider />
        <Category />
        <PopularBusiness />
        <View style={{ height: 50 }}></View>
      </ScrollView>
    </>
  );
};

export default Home;
