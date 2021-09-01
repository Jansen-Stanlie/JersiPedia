import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconCart, IconSubmit, IconBack} from '../../../assets';
import {colors} from '../../../util';
import TextIcon from './TextIcon';
import TextOnly from './TextOnly';

const Button = props => {
  const {icon, totalkeranjang, padding, type, onPress, title, fontSize} = props;
  console.log('type', type);
  const Icon = () => {
    if (icon === 'keranjang') {
      return <IconCart onPress={onPress} />;
    } else if (icon === 'arrow-left') {
      return <IconBack onPress={onPress} />;
    } else if (icon === 'submit') {
      return <IconSubmit />;
    }

    return <IconCart onPress={onPress} />;
  };
  if (type === 'text') {
    return <TextOnly {...props} />;
  } else if (type === 'textIcon') {
    return <TextIcon {...props} />;
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
