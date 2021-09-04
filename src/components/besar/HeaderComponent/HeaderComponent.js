import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {IconSeacrh} from '../../../assets/icons/icons';
import {colors, fonts, responsiveHeight} from '../../../util';
import Button from '../../kecil/Button/Button';
import Jarak from '../../kecil/Jarak/Jarak';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          {/* Input Pencarian */}
          <View style={styles.searchSection}>
            <IconSeacrh />
            <TextInput placeholder="Cari Jersey...." style={styles.input} />
          </View>
          <Jarak width={10} />
          <Button
            icon="keranjang"
            totalkeranjang={2}
            padding={10}
            onPress={() => this.props.navigation.navigate('Keranjang')}
          />
        </View>
      </View>
    );
  }
}

export default HeaderComponent;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(110),
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.primary.bold,
  },
  searchSection: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 5,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
});
