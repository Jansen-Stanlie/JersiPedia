import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ilustrasi, Logo} from '../../assets';
import {Inputan, Jarak, Button} from '../../components';
import {colors, fonts, responsiveHeight} from '../../util';
import SweetAlert from 'react-native-sweet-alert';
import {loginUser} from '../../actions/AuthAction';
import {connect} from 'react-redux';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  onLogin = () => {
    const {email, password} = this.state;
    if (email === '' || password === '') {
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
      this.props.dispatch(loginUser(email, password));
    }
  };
  componentDidUpdate(prevProps) {
    const {loginResult} = this.props;

    if (loginResult && prevProps.loginResult !== loginResult) {
      this.props.navigation.replace('MainApp');
    }
  }
  render() {
    return (
      <View style={styles.pages}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.cardLogin}>
          <Inputan
            label="Email"
            onChangeText={value => {
              this.setState({
                email: value,
              });
            }}
          />
          <Inputan
            label="Password"
            secureTextEntry
            onChangeText={value => {
              this.setState({
                password: value,
              });
            }}
          />
          <Jarak height={25} />
          <Button
            title="Login"
            type="text"
            padding={12}
            fontSize={18}
            loading={this.props.loginLoading}
            onPress={this.onLogin}
          />
        </View>

        <View style={styles.register}>
          <Text style={styles.textBlue}>Belum Punya Akun ?</Text>
          <Text
            style={styles.textBlue}
            onPress={() => this.props.navigation.navigate('Register1')}>
            Klik Untuk Daftar
          </Text>
        </View>

        <View style={styles.ilustrasi}>
          <Ilustrasi />
        </View>
      </View>
    );
  }
}
const mapStatetoProps = state => ({
  loginLoading: state.AuthReducer.loginLoading,
  loginResult: state.AuthReducer.loginResult,
  loginError: state.AuthReducer.loginError,
});
export default connect(mapStatetoProps, null)(Login);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ilustrasi: {
    position: 'absolute',
    bottom: 0,
    right: -100,
  },
  logo: {
    alignItems: 'center',
    marginTop: responsiveHeight(200),
  },
  cardLogin: {
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
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  register: {
    alignItems: 'center',
    marginTop: 10,
  },
  textBlue: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
  },
});
