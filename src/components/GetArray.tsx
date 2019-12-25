import React, { FunctionComponent, useState, useMemo } from 'react';
import { Container, Log } from './Section';

interface Props {
  nativeModule: any;
}

const GetArray: FunctionComponent<Props> = ({ nativeModule }) => {
  const [result, setResult] = useState('');

  const someObject = {
    title: 'React Native',
    author: 'Facebook',
  };
  const array = ['Hello world', 111, 222, 333, someObject];
  const caption = `array = ${JSON.stringify(array)}\n.nativeReverse(array):`;

  const fetchValue = () => {
    const resultFromNative = nativeModule.nativeReverse(array);
    setResult(resultFromNative);
  };

  useMemo(fetchValue, []);

  return (
    <Container title="Get Array">
      <Log caption={caption} value={JSON.stringify(result)} />
    </Container>
  );
};

export default GetArray;
