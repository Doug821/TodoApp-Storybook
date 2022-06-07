import React from 'react';
import {Text, View} from 'react-native';
import Button from '../Button/Button';

import {cardTitle, cardView} from './styles';

export default Card = ({title}) => {
  const onPress = () => console.log('clicked');

  return (
    <View style={cardView}>
      <Button
        title="✔"
        variant="check"
        disabled={false}
        onPress={onPress}
        loading={false}
      />
      <Text style={cardTitle}>{title}</Text>
      <Button
        title="🗑️"
        variant="delete"
        disabled={false}
        onPress={onPress}
        loading={false}
      />
    </View>
  );
};
