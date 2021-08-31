import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {dummyProfile} from '../../Data/DummyProfile/DummyProfile';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../util';
import {heightMobileUII} from '../../util/constant/constant';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: dummyProfile,
    };
  }
  render() {
    const {profile} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image source={profile.avatar} style={styles.foto} />
            <Text style={styles.nama}>{profile.nama}</Text>
            <Text style={styles.desc}>No. Hp : {profile.nomorHp}</Text>
            <Text style={styles.desc}>
              {profile.alamat}, {profile.kota}
            </Text>
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
    height: responsiveHeight(580),
    backgroundColor: colors.white,
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  foto: {
    width: responsiveHeight(150),
    height: responsiveHeight(150),
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: -responsiveWidth(75),
  },
  profile: {
    marginTop: 10,
    alignItems: 'center',
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(24, heightMobileUII),
  },
  desc: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(18, heightMobileUII),
    textAlign: 'center',
    width: responsiveWidth(350),
  },
});
