/* eslint-disable no-unused-vars */
import {Color} from 'chalk';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeAktif,
  IconJersey,
  IconJerseyAktif,
  IconProfile,
  IconProfileAktif,
} from '../../../assets/icons/icons';
import {colors, fonts} from '../../../util';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeAktif /> : <IconHome />;
    }
    if (label === 'Jersey') {
      return isFocused ? <IconJerseyAktif /> : <IconJersey />;
    }
    if (label === 'Profile') {
      return isFocused ? <IconProfileAktif /> : <IconProfile />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};
export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  text: isFocused => ({
    color: isFocused ? colors.white : colors.secondary,
    marginTop: 4,
    fontSize: 11,
    fontFamily: fonts.primary.bold,
  }),
});
