import React, { FunctionComponent, useState, useMemo } from 'react';
import { Container, Log } from './Section';

interface Props {
  nativeModule: any;
}

const GetObject: FunctionComponent<Props> = ({ nativeModule }) => {
  const [deviceInfo, setDeviceInfo] = useState({});

  const fetchValue = () => {
    const deviceInfoFromNative = nativeModule.getDeviceInfo();
    setDeviceInfo(deviceInfoFromNative);
  };

  useMemo(fetchValue, []);

  return (
    <Container title="Get Object">
      <Log caption=".getDeviceInfo():" value={JSON.stringify(deviceInfo)} />
    </Container>
  );
};

export default GetObject;
