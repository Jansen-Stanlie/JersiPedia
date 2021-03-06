import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {colors, fonts, responsiveWidth} from '../../../util';
import Button from '../Button/Button';

const CardJersey = ({jersey, navigation, dataUser}) => {
  console.log(dataUser);
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

const mapStatetoProps = state => ({
  dataUser: state.UserReducer.dataUser,
});

export default connect(mapStatetoProps, null)(CardJersey);

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
