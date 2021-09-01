import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Pilihan = ({textarea}) => {
  if (textarea) {
    <View>
      <Text>Text Area</Text>
    </View>;
  }
  return (
    <View>
      <Text>TextInput </Text>
    </View>
  );
};

export default Pilihan;

const styles = StyleSheet.create({});
