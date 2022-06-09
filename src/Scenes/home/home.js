import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Card from '../../components/Card/Card';

import {
  cardTitle,
  cardView,
  contentWrapper,
  inputContainer,
  cardsContainer,
} from './styles';

export default Home = ({title, navigate}) => {
  const onPress = () => console.log('clicked');

  return (
    <View style={contentWrapper}>
      <View style={cardView}>
        <Text style={cardTitle}>{title}</Text>
        <Button
          title="➡️"
          variant="check"
          disabled={false}
          onPress={navigate}
          loading={false}
        />
      </View>
      <View style={inputContainer}>
        <Input placeholder="Add a new task" value="" onChangeText={onPress} />
        <Button
          title="➕"
          variant="add"
          disabled={false}
          onPress={onPress}
          loading={false}
        />
      </View>
      <View style={cardsContainer}>
        <Card title="Task 1" />
        <Card title="Task 2" />
        <Card title="Task 3" />
        <Card title="Task 4" />
        <Card title="Task 5" />
      </View>
    </View>
  );
};
