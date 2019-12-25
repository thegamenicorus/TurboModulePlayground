import React, { FunctionComponent, useState, useMemo } from 'react';
import { Container, Log } from './Section';

interface Props {
  nativeModule: any;
}

const NumberAndBoolean: FunctionComponent<Props> = ({ nativeModule }) => {
  const [randNum, setRandNum] = useState(0);
  const [nextNum, setNextNum] = useState(0);
  const [isBiggerThan100, setIsBiggerThan100] = useState(false);

  const fetchValue = () => {
    const randNumFromNative = nativeModule.getRandomNumber();
    const nextNumFromNative = nativeModule.addItBy30(randNumFromNative);
    const isBiggerThan100FromNative = nativeModule.isBiggerThan100(
      nextNumFromNative,
    );

    setRandNum(randNumFromNative);
    setNextNum(nextNumFromNative);
    setIsBiggerThan100(isBiggerThan100FromNative);
  };

  useMemo(fetchValue, []);

  return (
    <Container title="Number + Boolean" onRetryPress={fetchValue}>
      <Log caption=".getRandomNumber():" value={randNum.toString()} />
      <Log caption={`.addItBy30(${randNum}):`} value={nextNum.toString()} />
      <Log
        caption={`.isBiggerThan100(${nextNum}):`}
        value={isBiggerThan100.toString()}
      />
    </Container>
  );
};

export default NumberAndBoolean;
