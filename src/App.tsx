/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FunctionComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  View,
  Platform,
  Linking,
  TouchableOpacity,
} from 'react-native';

import NativeMyTurboModule from './turbomodules/NativeMyTurboModule';
import NativeMyTurboModuleCxx from './turbomodules/NativeMyTurboModuleCxx';

declare var global: {HermesInternal: null | {}};

const Header: FunctionComponent = () => (
  <View style={styles.background}>
    <Text style={styles.headerText}>TurboModules Playground</Text>
  </View>
);

const Legend: FunctionComponent = ({children}) => (
  <View style={styles.legend}>{children}</View>
);

const openLink = () => {
  Linking.openURL('https://github.com/thegamenicorus/TurboModulePlayground');
};

const sayHelloObjC = () => {
  return NativeMyTurboModule.greeting();
};

const sayHelloCxx = () => {
  return NativeMyTurboModuleCxx.greeting();
};

const App: FunctionComponent = () => {
  if (Platform.OS === 'android') {
    return <View />;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Greeting from Turbo Modules
              </Text>
              <Legend>
                <Text style={styles.turboModuleName}>
                  NativeMyTurboModule (Obj-C):
                </Text>
                <Text
                  style={
                    styles.turboModuleResult
                  }>{`>> ${sayHelloObjC()}`}</Text>

                <Text style={styles.turboModuleName}>
                  NativeMyTurboModuleCxx (C++):
                </Text>
                <Text
                  style={
                    styles.turboModuleResult
                  }>{`>> ${sayHelloCxx()}`}</Text>
              </Legend>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn more</Text>
              <TouchableOpacity onPress={openLink} activeOpacity={0.8}>
                <Text style={[styles.sectionDescription, styles.link]}>
                  https://github.com/thegamenicorus/TurboModulePlayground
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F3F3F3',
  },
  background: {
    paddingVertical: 40,
    paddingHorizontal: 32,
    backgroundColor: '#F3F3F3',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
    paddingBottom: 30,
    height: '100%',
  },
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
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#444',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  headerText: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  turboModuleName: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '400',
    color: '#444',
  },
  turboModuleResult: {
    fontSize: 16,
    fontWeight: '400',
    color: '#444',
  },
  legend: {
    marginTop: 10,
    borderRadius: 8,
    padding: 10,
    paddingBottom: 20,
    backgroundColor: '#ffe8d6',
  },
  link: {
    color: '#617be3',
  },
});

export default App;
