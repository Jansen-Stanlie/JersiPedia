import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../components';
import {colors, responsiveHeight} from '../../util';

export default class JerseyDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    console.log('JD', this.props);
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <Button
          icon="arrow-left"
          padding={7}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.container} />
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
    height: responsiveHeight(450),
    backgroundColor: colors.white,
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});
