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
import {IlustrasiRegister2} from '../../assets';
import {Inputan, Jarak, Pilihan, Button} from '../../components';
import {connect} from 'react-redux';
import {getKotaList, getProvinsiList} from '../../actions/RajaOngkirAction';
import SweetAlert from 'react-native-sweet-alert';
class Register2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kota: '',
      provinsi: '',
      dataProvinsi: this.props.dataProvinsi,
      alamat: '',
    };
  }
  componentDidMount() {
    this.props.dispatch(getProvinsiList());
  }
  ubahProvinsi = provinsi_id => {
    console.log('proc id', provinsi_id);
    this.setState({
      provinsi: provinsi_id,
    });
    this.props.dispatch(getKotaList(provinsi_id));
  };
  onRegister = () => {
    const {kota, provinsi, alamat} = this.state;
    if (kota === '' || provinsi === '' || alamat === '') {
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
      const data = {
        nama: this.props.route.params.nama,
        email: this.props.route.params.email,
        nohp: this.props.route.params.nohp,
        alamat: alamat,
        kota: kota,
        provinsi: provinsi,
        status: 'user',
      };
      console.log('datass', data);
      return this.props.navigation.navigate('MainApp');
    }
  };
  render() {
    const {dataProvinsi, kota, provinsi, alamat} = this.state;
    console.log('dataKota', this.props.dataKota);
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
              <IlustrasiRegister2 />
              <Jarak height={5} />
              <Text style={styles.title}>Isi Alamat</Text>
              <Text style={styles.title}>Lengkap Anda</Text>

              <View style={styles.wrapperCircle}>
                <View style={styles.circleDisabled} />
                <Jarak width={10} />
                <View style={styles.circlePrimary} />
              </View>
            </View>

            <View style={styles.card}>
              <Inputan
                label="Alamat"
                textarea
                onChangeText={() => this.setState({alamat})}
              />

              <Pilihan
                label="Provinsi"
                datas={dataProvinsi ? dataProvinsi : []}
                selectedValue={provinsi}
                onValueChange={provinsi_id => this.ubahProvinsi(provinsi_id)}
              />
              <Pilihan
                label="Kota"
                datas={this.props.dataKota ? this.props.dataKota : []}
                selectedValue={kota}
                onValueChange={kotas =>
                  this.setState({
                    kota: kotas,
                  })
                }
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
const mapStatetoProps = state => ({
  dataProvinsi: state.RajaOngkirReducer.getProvinsiResult,
  dataKota: state.RajaOngkirReducer.getKotaResult,
});
export default connect(mapStatetoProps, null)(Register2);
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
