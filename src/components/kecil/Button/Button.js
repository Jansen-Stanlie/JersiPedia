import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconBack, IconCart} from '../../../assets/icons/icons';
import {colors} from '../../../util';
import TextOnly from './TextOnly';

const Button = props => {
  const {icon, totalkeranjang, padding, type, onPress} = props;
  console.log('Padding', padding);
  const Icon = () => {
    if (icon === 'keranjang') {
      return <IconCart />;
    }
    return <IconBack />;
  };
  if (type === 'text') {
    return <TextOnly {...props} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(padding)}>
      <Icon />
      {totalkeranjang && (
        <View style={styles.notif}>
          <Text style={styles.textNotif}>{totalkeranjang}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.white,
    padding: padding,
    borderRadius: 5,
  }),
  notif: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 3,
    padding: 3,
  },
  textNotif: {
    fontSize: 10,
    color: colors.white,
  },
});
