import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '@/configs/FirebaseConfig';

type Category = {
  icon: string;
  id: number;
  name: string;
};

const CategoryItem = ({
  category,
  onCategoryPress,
}: {
  category: Category;
  onCategoryPress: (category: Category) => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{ marginRight: 20 }}
      onPress={() => onCategoryPress(category)}
    >
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.icon_bg,
          borderRadius: 99,
        }}
      >
        <Image
          source={{ uri: category.icon }}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          fontFamily: 'outfit-medium',
          textAlign: 'center',
          marginTop: 5,
        }}
      >
        {' '}
        {category.name}{' '}
      </Text>
    </TouchableOpacity>
  );
};

const Category = () => {
  const [categories, setCategories] = useState<any>([]);
  const getCategories = async () => {
    setCategories([]);
    try {
      const q = query(collection(db, 'categories'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setCategories((prev: any) => [...prev, doc.data()]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
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
          Category
        </Text>
        <Text style={{ color: Colors.primary, fontFamily: 'outfit-medium' }}>
          View All
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            key={item.id}
            onCategoryPress={(category: Category) => console.log(category)}
          />
        )}
        style={{ marginLeft: 20 }}
      />
    </View>
  );
};

export default Category;
