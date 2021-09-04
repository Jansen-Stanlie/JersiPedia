import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ListMenu} from '../../components/besar/index';
import {dummyMenu} from '../../Data';
import {
  colors,
  fonts,
  responsiveHeight,
  responsiveWidth,
  getData,
} from '../../util';
import {heightMobileUII} from '../../util/constant/constant';
import {DefaultImage} from '../../assets';
export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: false,
      menus: dummyMenu,
    };
  }
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      // do something
      console.log('Pasang ya');
      this.getUserData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res;
      if (data) {
        this.setState({
          profile: data,
        });
      } else {
        return this.props.navigation.replace('Login');
      }
    });
  };
  render() {
    const {profile, menus} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image
              source={profile.avatar ? {uri: profile.avatar} : DefaultImage}
              style={styles.foto}
            />
            <Text style={styles.nama}>{profile.nama}</Text>
            <Text style={styles.desc}>No. Hp : {profile.nohp}</Text>
            <Text style={styles.desc}>
              {profile.alamat}, {profile.kota}
            </Text>
          </View>
          <ListMenu menus={menus} {...this.props} />
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
