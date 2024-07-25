import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from '@/configs/FirebaseConfig';
import images from '@/constants/images';

const BusinessCard = ({ business }: { business: any }) => {
  return (
    <TouchableOpacity
      style={{
        marginLeft: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 10,
      }}
    >
      <Image
        style={{ borderRadius: 15 }}
        source={{ uri: business.imageUrl }}
        width={220}
        height={130}
      />
      <View style={{ marginTop: 7 }}>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 17 }}>
          {' '}
          {business.name}{' '}
        </Text>
        <Text
          style={{ fontFamily: 'outfit', fontSize: 13, color: Colors.gray }}
        >
          {' '}
          {business.address}{' '}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}
        >
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
            <Image source={images.star} style={{ width: 15, height: 15 }} />
            <Text style={{ fontFamily: 'outfit' }}>4.5</Text>
          </View>
          <View
            style={{
              borderRadius: 5,
              backgroundColor: Colors.primary,
              padding: 3,
            }}
          >
            <Text
              style={{
                fontFamily: 'outfit',
                color: '#fff',
                fontSize: 12,
              }}
            >
              {business.category}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const PopularBusiness = () => {
  const [businesses, setBusinesses] = useState<any>([]);
  const getBusinesses = async () => {
    setBusinesses([]);
    try {
      const q = query(collection(db, 'businesses'), limit(10));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setBusinesses((prev: any) => [...prev, doc.data()]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBusinesses();
  }, []);
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 20,
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'outfit-bold',
          }}
        >
          Trending
        </Text>
        <Text style={{ color: Colors.primary, fontFamily: 'outfit-medium' }}>
          View All
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={businesses}
        renderItem={({ item, index }) => (
          <BusinessCard key={index} business={item} />
        )}
      />
    </View>
  );
};

export default PopularBusiness;
