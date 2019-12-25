import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => (
  <View style={styles.background}>
    <Text style={styles.textHeader}>TurboModules Playground</Text>
  </View>
);

const styles = StyleSheet.create({
  background: {
    paddingVertical: 40,
    paddingHorizontal: 32,
    backgroundColor: '#F3F3F3',
  },
  textHeader: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
});

export default Header;
