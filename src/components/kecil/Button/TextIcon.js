import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconBack, IconKeranjangPutih} from '../../../assets';
import {colors, fonts} from '../../../util';
import Jarak from '../Jarak/Jarak';
import TextOnly from './TextOnly';

const TextIcon = props => {
  const {icon, padding, onPress} = props;
  console.log('Padding', padding);
  const Icon = () => {
    if (icon === 'keranjang-putih') {
      return <IconKeranjangPutih />;
    }
    return <IconBack onPress={onPress} />;
  };
  console.log('font', props.fontSize);
  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Icon />
      <Jarak width={5} />
      <Text style={styles.title(props.fontSize)}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.primary,
    padding: padding,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: fontsize => ({
    color: colors.white,
    fontSize: fontsize,
    fontFamily: fonts.primary.bold,
  }),
});