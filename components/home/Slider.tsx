import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '@/configs/FirebaseConfig';

type Slider = {
  imageurl: string;
  name: string;
};

const Slider = () => {
  const [sliders, setSliders] = useState<Slider[]>([]);
  const getSliderList = async () => {
    setSliders([]);
    try {
      const q = query(collection(db, 'sliders'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setSliders((prev: any) => [...prev, doc.data()]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSliderList();
  }, []);
  return (
    <View>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 20,
          paddingLeft: 20,
          paddingTop: 20,
          marginBottom: 5,
        }}
      >
        #Special for you
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={sliders}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.imageurl }}
            style={{
              width: 300,
              height: 150,
              borderRadius: 15,
              marginRight: 15,
            }}
          />
        )}
        style={{ paddingLeft: 20 }}
      />
    </View>
  );
};

export default Slider;
