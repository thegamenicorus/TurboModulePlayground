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
      caption={`NativeMyTurboModule (${nativeModule.language()}):`}
      value={nativeModule.greeting()}
    />
    {nativeModuleCxx && (
      <Log
        caption={`NativeMyTurboModuleCxx (${nativeModuleCxx.language()}):`}
        value={nativeModuleCxx.greeting()}
      />
    )}
  </Container>
);

export default Greeting;
