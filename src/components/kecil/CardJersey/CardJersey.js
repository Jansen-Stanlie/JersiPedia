import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import {colors, fonts, responsiveWidth} from '../../../util';
import Button from '../Button/Button';

const CardJersey = ({jersey, navigation}) => {
  console.log('cardLs', navigation);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image source={jersey.gambar[0]} style={styles.gambar} />
        <Text style={styles.text}>{jersey.nama}</Text>
      </TouchableOpacity>
      <Button
        type="text"
        title="Detail"
        padding={7}
        onPress={() => navigation.navigate('JerseyDetail', {jersey})}
      />
    </View>
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
    fontSize: 13,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.yellow,
    width: responsiveWidth(150),
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  container: {
    marginBottom: 25,
  },
});
