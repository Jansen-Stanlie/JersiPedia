import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {getUser} from '../../actions/UserAction';
import {
  BannerSlider,
  HeaderComponent,
  ListLiga,
  ListJerseys,
} from '../../components';
import Button from '../../components/kecil/Button/Button';
import Jarak from '../../components/kecil/Jarak/Jarak';
import {dummyLigas} from '../../Data';
import {dummyJerseys} from '../../Data/DummyJersey/DummyJersey';
import {colors, fonts} from '../../util';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ligas: dummyLigas,
      jerseys: dummyJerseys,
    };
  }

  render() {
    const {navigation} = this.props;
    console.log('Data', this.props.dataUSer);
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent {...this.props} />
          <BannerSlider />
          <View style={styles.pilihLiga}>
            <Text style={styles.label}>Pilih Liga</Text>
            <ListLiga ligas={this.state.ligas} />
          </View>
          <View style={styles.pilihJersey}>
            <Text style={styles.label}>
              Pilih <Text style={styles.bolds}>Jersey</Text> Yang anda Inginkan
            </Text>
            <ListJerseys jerseys={this.state.jerseys} navigation={navigation} />
            <Button title="Lihat Semua" type="text" padding={10} />
          </View>
          <Jarak height={15} />
        </ScrollView>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  dataUSer: state.UserReducer.dataUser,
});
export default connect(mapStatetoProps, null)(Home);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  pilihLiga: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  pilihJersey: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  bolds: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
});
