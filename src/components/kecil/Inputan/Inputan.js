import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../util';

const Inputan = props => {
  const {textarea, width, height, fontsize, placeholder, label} = props;
  if (textarea) {
    return (
      <View style={styles.container}>
        <Text style={styles.label(fontsize)}>{label} : </Text>
        <TextInput
          multiline={true}
          numberOfLine={10}
          style={styles.inputTextArea(fontsize)}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontsize)}>{label} : </Text>
      <TextInput style={styles.input(width, height, fontsize)} />
    </View>
  );
};

export default Inputan;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  label: fontsize => ({
    fontSize: fontsize ? fontsize : 18,
    fontFamily: fonts.primary.regular,
  }),
  input: (width, height, fontsize) => ({
    fontSize: fontsize ? fontsize : 18,
    fontFamily: fonts.primary.regular,
    width: width,
    height: height,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    paddingVertical: 5,
    paddingHorizontal: 10,
  }),
  inputTextArea: fontsize => ({
    fontSize: fontsize ? fontsize : 18,
    fontFamily: fonts.primary.regular,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  }),
});
