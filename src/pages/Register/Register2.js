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

class Register2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kota: '',
      provinsi: '',
      dataProvinsi: this.props.dataProvinsi,
      dataKota: this.props.dataKota,
    };
  }
  componentDidMount() {
    this.props.dispatch(getProvinsiList());
    this.props.dispatch(getKotaList(2));
  }
  render() {
    const {dataKota, dataProvinsi, kota, provinsi} = this.state;
    console.log('dataKota', dataKota);
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
              <Inputan label="Alamat" textarea />

              <Pilihan
                label="Provinsi"
                datas={dataProvinsi ? dataProvinsi : []}
                selectedValue={provinsi}
              />
              <Pilihan
                label="Kota/Kab"
                datas={dataKota ? dataKota : []}
                selectedValue={kota}
              />
              <Jarak height={25} />
              <Button
                title="Continue"
                type="textIcon"
                icon="submit"
                padding={10}
                fontSize={18}
                onPress={() => this.props.navigation.navigate('MainApp')}
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
