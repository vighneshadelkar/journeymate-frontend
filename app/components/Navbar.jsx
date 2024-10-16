import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
  const navigation = useNavigation(); // Access navigation directly

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.navbarContainer}>
      <View style={styles.navContent}>
        <View>
          <Text style={styles.navbarTitle}>JOURNEYMATE</Text>
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
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  navContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  navbarTitle2: {
    fontSize: 18,
  },
  iconPlaceholder: {
    padding: 10,
  },
  iconText: {
    fontSize: 20,
  },
});
