import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image
      source={require('./images/background.png')}
      style={styles.containerImage}
      resizeMode="contain"
    />
    <Image
      source={require('./images/logo.png')}
      style={styles.image}
      resizeMode="contain"
    />
    <Text style={styles.title}>Currency Converter</Text>
  </View>
);

export default Logo;
