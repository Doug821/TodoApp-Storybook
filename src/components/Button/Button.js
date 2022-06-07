import React from 'react';
import {Text, ActivityIndicator, View} from 'react-native';
import {flex, palette} from '../../common.styles';
import {
  addButton,
  deleteButton,
  primaryButtonModal,
  checkButton,
} from './styles';

import Pressable from '../pressable';

export default Button = ({
  title,
  variant = 'add',
  disabled,
  icon,
  onPress,
  containerStyle,
  textStyle,
  loading,
}) => {
  const variantMap = {
    add: addButton,
    delete: deleteButton,
    check: checkButton,
    disabled: primaryButtonModal,
  };

  const styles = variantMap[variant];

  return (
    <Pressable
      style={[disabled ? styles.disabled : styles.button, containerStyle]}
      disabled={disabled || loading}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={palette.black} size={styles.title.fontSize} />
      ) : (
        <View style={flex.centerRow}>
          {icon}
          {title && <Text style={[styles.title, textStyle]}>{title}</Text>}
        </View>
      )}
    </Pressable>
  );
};
