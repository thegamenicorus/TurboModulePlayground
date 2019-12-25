import React, { FunctionComponent, useState, useMemo } from 'react';
import { Container, Log } from './Section';

interface Props {
  nativeModule: any;
}

const SimulateCallback: FunctionComponent<Props> = ({ nativeModule }) => {
  const [result, setResult] = useState('');
  const [fetching, setFetching] = useState(false);

  const waitingSeconds = 5;
  const caption = `waitingSeconds=${waitingSeconds}\n.simulateCallback:`;
  const fetchValue = () => {
    setFetching(true);
    // eslint-disable-next-line no-shadow
    nativeModule.simulateCallback(waitingSeconds, (result: string) => {
      setResult(result);
      setFetching(false);
    });
  };

  useMemo(fetchValue, []);

  return (
    <Container
      title="Callback"
      onRetryPress={fetching ? undefined : fetchValue}>
      <Log caption={caption} value={result} fetching={fetching} />
    </Container>
  );
};

export default SimulateCallback;
