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

export default Home = ({title, navigate, tasks}) => {
  const onPress = () => console.log('clicked');
  const onPressDb = t => console.log(t[0]);

  return (
    <View style={contentWrapper}>
      <View style={cardView}>
        <Text style={cardTitle}>{title}</Text>
        <Button
          title="➡️"
          variant="check"
          disabled={false}
          onPress={onPressDb(tasks)}
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
        {tasks &&
          tasks.map((task, index) => {
            <Card key={index} title={task} />;
          })}
      </View>
    </View>
  );
};
