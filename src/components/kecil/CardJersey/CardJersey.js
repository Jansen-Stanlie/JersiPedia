import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import {colors, fonts, responsiveWidth} from '../../../util';

const CardJersey = ({jersey}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={jersey.gambar[0]} style={styles.gambar} />
      <Text style={styles.text}>{jersey.nama}</Text>
    </TouchableOpacity>
  );
};

export default CardJersey;

const styles = StyleSheet.create({
  gambar: {
    width: 124,
    height: 124,
  },
  text: {
    fontFamily: fonts.primary.bold,
    fontSize: 15,
    textTransform: 'capitalize',
  },
  card: {
    backgroundColor: colors.yellow,
    width: responsiveWidth(150),
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
