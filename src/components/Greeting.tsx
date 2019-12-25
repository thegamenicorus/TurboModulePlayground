import React, { FunctionComponent } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
import { Container, Log } from './Section';
// import { Spec as SpecObjC } from '../turbomodules/NativeMyTurboModule';
// import { Spec as SpecObjC } from '../turbomodules/NativeMyTurboModuleCxx';
interface Props {
  nativeModule: any;
  nativeModuleCxx: any;
}

const Greeting: FunctionComponent<Props> = ({
  nativeModule,
  nativeModuleCxx,
}) => (
  <Container title="Greeting from Turbo Modules">
    <Log
      caption="NativeMyTurboModule (Obj-C):"
      value={nativeModule.greeting()}
    />

    <Log
      caption="NativeMyTurboModuleCxx (C++):"
      value={nativeModuleCxx.greeting()}
    />
  </Container>
);

export default Greeting;
