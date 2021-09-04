import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import {dummyProfile} from '../../Data';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../util';
import {Inputan, Pilihan, Button} from '../../components';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProvinsi: [],
      dataKota: [],
      profile: dummyProfile,
    };
  }

  render() {
    const {dataKota, dataProvinsi, profile} = this.state;
    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Inputan label="Nama" value={profile.nama} />
          <Inputan label="Email" value={profile.email} />
          <Inputan label="No. Handphone" value={profile.nomorHp} />
          <Inputan label="Alamat" value={profile.alamat} textarea />

          <Pilihan label="Provinsi" datas={dataProvinsi} />
          <Pilihan label="Kota/Kab" datas={dataKota} />

          <View style={styles.inputFoto}>
            <Text style={styles.label}>Foto Profile :</Text>

            <View style={styles.wrapperUpload}>
              <Image source={profile.avatar} style={styles.foto} />

              <View style={styles.tombolChangePhoto}>
                <Button title="Change Photo" type="text" padding={7} />
              </View>
            </View>
          </View>

          <View style={styles.submit}>
            <Button
              title="Submit"
              type="textIcon"
              icon="submit"
              padding={responsiveHeight(15)}
              fontSize={18}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  inputFoto: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  foto: {
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 40,
  },
  wrapperUpload: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  tombolChangePhoto: {
    marginLeft: 20,
    flex: 1,
  },
  submit: {
    marginVertical: 30,
  },
});
