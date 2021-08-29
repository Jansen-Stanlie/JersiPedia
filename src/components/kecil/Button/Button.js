import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconCart} from '../../../assets/icons/icons';
import {colors} from '../../../util';

const Button = ({icon, totalkeranjang, padding}) => {
  console.log('Padding', padding);
  const Icon = () => {
    if (icon === 'keranjang') {
      return <IconCart />;
    }
    return <IconCart />;
  };
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
