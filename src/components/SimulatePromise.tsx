import React, { FunctionComponent, useState, useMemo } from 'react';
import { Container, Log } from './Section';

interface Props {
  error: boolean;
  nativeModule: any;
}

const getCaption = (error: boolean, waitingSeconds: number) =>
  `error=${error}\nwaitingSeconds=${waitingSeconds}\n.simulatePromise:`;

const SimulatePromise: FunctionComponent<Props> = ({ error, nativeModule }) => {
  const [result, setResult] = useState('');
  const [fetching, setFetching] = useState(false);

  const waitingSeconds = error ? 2 : 4;

  const fetchValue = async () => {
    setFetching(true);
    // eslint-disable-next-line no-shadow

    try {
      const resultFromNative = await nativeModule.simulatePromise(
        error,
        waitingSeconds,
      );
      setResult(resultFromNative);
    } catch (err) {
      setResult(JSON.stringify(err));
    } finally {
      setFetching(false);
    }
  };

  useMemo(fetchValue, []);

  return (
    <Container
      title={`Promise (${error ? 'Error' : 'Success'})`}
      onRetryPress={fetching ? undefined : fetchValue}>
      <Log
        caption={getCaption(!!error, waitingSeconds)}
        value={result}
        fetching={fetching}
      />
    </Container>
  );
};

export default SimulatePromise;
