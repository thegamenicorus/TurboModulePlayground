import React, { FunctionComponent } from 'react';
import { Container, Log } from './Section';
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
