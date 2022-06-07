import React from 'react';
import {TextInput} from 'react-native';

import {textInput} from './styles';

export default Input = ({disabled, onChangeText, value, placeholder}) => {
  return (
    <TextInput
      style={textInput}
      disabled={disabled}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
  );
};
