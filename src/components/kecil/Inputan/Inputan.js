import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../util';

const Inputan = props => {
  const {textarea, width, height, fontsize, placeholder, label, value} = props;
  if (textarea) {
    return (
      <View style={styles.container}>
        <Text style={styles.label(fontsize)}>{label} : </Text>
        <TextInput
          multiline={true}
          numberOfLines={5.5}
          placeholder={placeholder}
          style={styles.inputTextArea(fontsize)}
          value={value}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontsize)}>{label} : </Text>
      <TextInput style={styles.input(width, height, fontsize)} value={value} />
    </View>
  );
};

export default Inputan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
