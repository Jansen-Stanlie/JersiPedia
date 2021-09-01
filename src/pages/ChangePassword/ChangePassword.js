import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, responsiveHeight} from '../../util';
import {Inputan, Button} from '../../components';

export default class ChangePassword extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <View>
          <Inputan label="Password Lama" secureTextEntry />
          <Inputan label="Password Baru" secureTextEntry />
          <Inputan label="Konfirmasi Password Baru" secureTextEntry />
        </View>

        <View style={styles.submit}>
          <Button
            title="Submit"
            type="textIcon"
            icon="submit"
            padding={responsiveHeight(15)}
            fontSize={18}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  submit: {
    marginVertical: 30,
  },
});
