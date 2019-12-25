import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { SectionContainerType, LogType } from '../types';
import print from '../utils/print';

export const Log: FunctionComponent<LogType> = ({ caption, value }) => (
  <>
    <Text style={styles.textCaption}>{caption}</Text>
    <Text style={styles.textValue}>{print(value)}</Text>
  </>
);

export const Container: FunctionComponent<SectionContainerType> = ({
  title,
  onRetryPress,
  children,
}) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.textTile}>{title}</Text>
    <View style={styles.legend}>
      {children}
      {onRetryPress && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonRetry}
          onPress={onRetryPress}>
          <Text style={styles.textButtonRetry}>Retry</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  legend: {
    marginTop: 10,
    borderRadius: 8,
    padding: 10,
    paddingBottom: 20,
    backgroundColor: '#ffe8d6',
  },
  buttonRetry: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#617be3',
  },
  textTile: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  textCaption: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '400',
    color: '#444',
  },
  textValue: {
    fontSize: 16,
    fontWeight: '400',
    color: '#444',
  },
  textButtonRetry: {
    color: 'white',
  },
});
