import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {HeaderComponent, ListLiga, ListJerseys} from '../../components';
import {dummyLigas} from '../../Data';
import {dummyJerseys} from '../../Data/DummyJersey/DummyJersey';
import {colors, fonts} from '../../util';

export default class ListJersey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ligas: dummyLigas,
      jerseys: dummyJerseys,
    };
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.pilihLiga}>
            <ListLiga ligas={this.state.ligas} />
          </View>
          <View style={styles.pilihJersey}>
            <Text style={styles.label}>
              Pilih <Text style={styles.bolds}>Jersey</Text> Yang anda Inginkan
            </Text>
            <ListJerseys jerseys={this.state.jerseys} navigation={navigation} />
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
  container: {
    marginTop: -32.5,
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
