/* eslint-disable no-shadow */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform,
} from 'react-native';
import {colors, fonts, responsiveWidth} from '../../util';
import {IlustrasiRegister1} from '../../assets';
import {Inputan, Jarak, Button} from '../../components';
import SweetAlert from 'react-native-sweet-alert';
class Register1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      email: '',
      nohp: '',
      password: '',
    };
  }
  onRegister = () => {
    const {nama, email, nohp, password} = this.state;
    console.log('nama', nama);
    if (nama === '' || email === '' || nohp === '' || password === '') {
      return SweetAlert.showAlertWithOptions(
        {
          title: 'Error',
          subTitle: 'Please fill the blank input',
          confirmButtonTitle: 'OK',
          confirmButtonColor: '#000',
          otherButtonTitle: 'Cancel',
          otherButtonColor: '#dedede',
          style: 'error',
          cancellable: true,
        },
        callback => console.log('callback'),
      );
    } else {
      return this.props.navigation.navigate('Register2', this.state);
    }
  };
  render() {
    const {nama, email, nohp, password} = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.btnBack}>
              <Button
                icon="arrow-left"
                onPress={() => this.props.navigation.goBack()}
              />
            </View>

            <View style={styles.ilustrasi}>
              <IlustrasiRegister1 />
              <Jarak height={5} />
              <Text style={styles.title}>Daftar</Text>
              <Text style={styles.title}>Isi Daftar Diri Anda</Text>

              <View style={styles.wrapperCircle}>
                <View style={styles.circlePrimary} />
                <Jarak width={10} />
                <View style={styles.circleDisabled} />
              </View>
            </View>

            <View style={styles.card}>
              <Inputan
                label="Nama"
                // value={nama}
                onChangeText={nama => this.setState({nama})}
              />
              <Inputan
                label="Email"
                // value={email}
                onChangeText={email => this.setState({email: email})}
              />
              <Inputan
                label="No. Handphone"
                keyboardType="number-pad"
                // value={nohp}
                onChangeText={nohp => this.setState({nohp})}
              />
              <Inputan
                label="Password"
                secureTextEntry
                // value={password}
                onChangeText={password => this.setState({password})}
              />
              <Jarak height={25} />
              <Button
                title="Continue"
                type="textIcon"
                icon="submit"
                padding={10}
                fontSize={18}
                onPress={this.onRegister}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
export default Register1;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
  },
  ilustrasi: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primary.light,
    color: colors.primary,
  },
  wrapperCircle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  circlePrimary: {
    backgroundColor: colors.primary,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10,
  },
  circleDisabled: {
    backgroundColor: colors.border,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10,
  },
  card: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  btnBack: {
    marginLeft: 30,
    position: 'absolute',
  },
});
