/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { FunctionComponent } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Platform,
} from 'react-native';

import NativeMyTurboModule from './turbomodules/NativeMyTurboModule';
import NativeMyTurboModuleCxx from './turbomodules/NativeMyTurboModuleCxx';
import Greeting from './components/Greeting';
import { Header, Footer } from './components/Page';
import NumberAndBoolean from './components/NumberAndBoolean';
import GetObject from './components/GetObject';
import GetArray from './components/GetArray';
import SimulateCallback from './components/SimulateCallback';
import SimulatePromise from './components/SimulatePromise';

declare var global: { HermesInternal: null | {} };

const App: FunctionComponent = () => {
  if (Platform.OS === 'android') {
    return <View />;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <Greeting
              nativeModule={NativeMyTurboModule}
              nativeModuleCxx={NativeMyTurboModuleCxx}
            />
            <NumberAndBoolean nativeModule={NativeMyTurboModule} />
            <GetObject nativeModule={NativeMyTurboModule} />
            <GetArray nativeModule={NativeMyTurboModule} />
            <SimulateCallback nativeModule={NativeMyTurboModule} />
            <SimulatePromise error={false} nativeModule={NativeMyTurboModule} />
            <SimulatePromise error={true} nativeModule={NativeMyTurboModule} />
            <Footer />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#F3F3F3',
  },
  body: {
    backgroundColor: 'white',
    paddingBottom: 30,
    height: '100%',
  },
});

export default App;
