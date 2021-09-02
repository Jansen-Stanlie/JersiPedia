import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  Button,
  CardLiga,
  Inputan,
  Jarak,
  JerseySlider,
  Pilihan,
} from '../../components';
import {
  colors,
  fonts,
  heightMobileUII,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
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
        <JerseySlider images={this.state.gambar} />
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
            <View style={styles.wrapperInput}>
              <Inputan
                label="Jumlah"
                width={responsiveWidth(150)}
                height={responsiveHeight(30)}
                fontsize={13}
              />
              <Pilihan
                label="Pilih Ukuran"
                width={responsiveWidth(150)}
                height={responsiveHeight(30)}
                fontsize={12}
                datas={this.state.jersey.ukuran}
              />
            </View>

            <Inputan
              label="Keterangan"
              textarea
              fontsize={15}
              placeholder="Isi Jika Ingin Menambahkan Keterangan Pada Baju"
            />
            <Jarak height={15} />
            <Button
              title="Masukkan Keranjang"
              type="textIcon"
              icon="keranjang-putih"
              padding={responsiveHeight(17)}
              fontSize={18}
            />
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
    zIndex: 1,
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
    marginBottom: 5,
  },
  jenisBerat: {
    fontFamily: fonts.primary.regular,
    fontSize: 13,
    marginRight: 30,
  },
  wrapperInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
