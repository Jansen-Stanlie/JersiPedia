import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Button, CardLiga} from '../../components';
import {
  colors,
  fonts,
  heightMobileUII,
  numberWithCommas,
  responsiveHeight,
} from '../../util';

export default class JerseyDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jersey: this.props.route.params.jersey,
      gambar: this.props.route.params.jersey.gambar,
    };
  }
  render() {
    console.log('JD', this.props);
    console.log('Gambar', this.state.jersey.liga);
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <View style={styles.button}>
          <Button
            icon="arrow-left"
            padding={7}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={styles.container}>
          <View style={styles.liga}>
            <CardLiga liga={this.state.jersey.liga} />
          </View>
          <View style={styles.desc}>
            <Text style={styles.nama}>{this.state.jersey.nama}</Text>
            <Text style={styles.harga}>
              Harga : Rp. {numberWithCommas(this.state.jersey.harga)}
            </Text>
            <View style={styles.garis} />
            <View style={styles.wrapperJenisBerat}>
              <Text style={styles.jenisBerat}>
                Jenis : {this.state.jersey.jenis}
              </Text>
              <Text style={styles.jenisBerat}>
                Berat : {this.state.jersey.berat}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(450),
    backgroundColor: colors.white,
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  button: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 30,
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(24, heightMobileUII),
    textTransform: 'capitalize',
  },
  desc: {
    marginHorizontal: 30,
  },
  harga: {
    fontFamily: fonts.primary.light,
    fontSize: RFValue(24, heightMobileUII),
  },
  liga: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: -30,
  },
  garis: {
    borderWidth: 0.5,
    marginTop: 5,
  },
  wrapperJenisBerat: {
    flexDirection: 'row',
  },
  jenisBerat: {
    fontFamily: fonts.primary.regular,
    fontSize: 13,
    marginRight: 30,
  },
});
