import React from 'react';
import PropTypes from 'prop-types';
import color from 'color';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';

const InputWithButton = (props) => {
  const { 
buttonText, onPress, editable = true, buttonTextColor = null 
} = props;
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier,);
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.disabledInput);
  }
  const buttonTextStyle = [
    styles.buttonText,
    buttonTextColor ? { color: buttonTextColor } : null,
  ];

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        style={styles.buttonContainer}
      >
        <Text style={buttonTextStyle}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        editable={editable}
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  editable: PropTypes.bool,
  buttonTextColor: PropTypes.string,
};

export default InputWithButton;
