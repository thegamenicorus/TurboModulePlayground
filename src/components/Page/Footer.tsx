import React from 'react';
import {
  StyleSheet,
  Linking,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const openLink = () => {
  Linking.openURL('https://github.com/thegamenicorus/TurboModulePlayground');
};

const Footer = () => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>Learn more</Text>
    <TouchableOpacity onPress={openLink} activeOpacity={0.8}>
      <Text style={[styles.sectionDescription, styles.link]}>
        https://github.com/thegamenicorus/TurboModulePlayground
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#444',
  },
  link: {
    color: '#617be3',
  },
});

export default Footer;
