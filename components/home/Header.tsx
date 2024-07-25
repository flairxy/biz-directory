import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  const { user } = useUser();
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: Colors.primary,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ height: 45, width: 45, borderRadius: 99 }}
        />
        <View>
          <Text style={{ color: '#fff', marginLeft: 5 }}>Welcome,</Text>
          <Text
            style={{ fontSize: 19, fontFamily: 'outfit-medium', color: '#fff' }}
          >
            {' '}
            {user?.fullName}{' '}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          marginTop: 15,
          borderRadius: 8,
        }}
      >
        <Ionicons name="search" size={24} color={Colors.primary} />
        <TextInput
          placeholder="Search.."
          style={{ fontFamily: 'outline', fontSize: 16 }}
        />
      </View>
    </View>
  );
};

export default Header;
