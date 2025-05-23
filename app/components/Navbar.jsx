import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
  const navigation = useNavigation(); // Access navigation directly

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.navbarContainer}>
      <View style={styles.navContent}>
        <View>
          <Text style={styles.navbarTitle} onPress={navigateToHome}>JOURNEYMATE</Text>
          <Text style={styles.navbarTitle2}>Hi! There</Text>
        </View>

        <TouchableOpacity style={styles.iconPlaceholder} onPress={navigateToProfile}>
          <Text style={styles.iconText}>👤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    // height: 110,
    justifyContent: 'center',
    // padding:40,
    paddingHorizontal: 30,
    marginTop:25,
    width: '100%',
  },
  navContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,

  },
  navbarTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  navbarTitle2: {
    fontSize: 25,
  },
  iconPlaceholder: {
    padding: 0,
  },
  iconText: {
    fontSize: 40,
  },
});
