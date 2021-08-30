import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {BannerSlider, HeaderComponent, ListLiga} from '../../components';
import ListJersey from '../../components/besar/ListJersey/ListJersey';
import {dummyLigas} from '../../Data';
import {dummyJerseys} from '../../Data/DummyJersey/DummyJersey';
import {colors, fonts} from '../../util';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ligas: dummyLigas,
      jerseys: dummyJerseys,
    };
  }
  render() {
    return (
      <View style={styles.page}>
        <ScrollView>
          <HeaderComponent />
          <BannerSlider />
          <View style={styles.pilihLiga}>
            <Text style={styles.label}>Pilih Liga</Text>
            <ListLiga ligas={this.state.ligas} />
          </View>
          <View style={styles.pilihJersey}>
            <Text style={styles.label}>
              Pilih <Text style={styles.bolds}>Jersey</Text> Yang anda Inginkan
            </Text>
            <ListJersey jerseys={this.state.jerseys} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
