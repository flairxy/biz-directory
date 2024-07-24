import { Colors } from '@/constants/Colors';
import images from '@/constants/images';
import { router } from 'expo-router';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const onPress = () => {
  setTimeout(() => {
    router.push('/sign-in');
  }, 1);
};
const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100,
          }}
        >
          <Image
            source={images.login}
            style={{
              width: 220,
              height: 450,
              borderRadius: 20,
              borderWidth: 6,
              borderColor: '#000',
            }}
          />
        </View>
        <View style={styles.subContainer}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'outfit-bold',
              textAlign: 'center',
            }}
          >
            {' '}
            Your Ultimate
            <Text style={{ color: Colors.primary }}>
              {' '}
              Community Business Directory{' '}
            </Text>{' '}
            App{' '}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'outfit',
              textAlign: 'center',
              marginVertical: 15,
              color: Colors.gray,
            }}
          >
            Find your favorite business near you and post your own business to
            your community
          </Text>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={onPress}
          >
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontFamily: 'outfit',
              }}
            >
              Let's get started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subContainer: { padding: 20, marginTop: -20, backgroundColor: '#fff' },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default LoginScreen;
