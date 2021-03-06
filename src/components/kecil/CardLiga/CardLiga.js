import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {colors, responsiveHeight} from '../../../util';

const CardLiga = ({liga}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={liga.gambar} style={styles.logo} />
    </TouchableOpacity>
  );
};

export default CardLiga;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    borderRadius: 15,
  },
  logo: {
    width: responsiveHeight(70),
    height: responsiveHeight(57),
  },
});
