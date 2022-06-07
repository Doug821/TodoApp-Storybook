import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import ButtonStory from './Button/Button';
import InputStory from './Input/Input';
import CardStory from './Card/Card';
import {palette} from '../../src/common.styles';

storiesOf('Button', module)
  .addDecorator(story => (
    <View style={{backgroundColor: palette.black, height: 500, padding: 10}}>
      <View>{story()}</View>
    </View>
  ))
  .add('Add', () => {
    return <ButtonStory step="Add" />;
  })
  .add('HandleCheck', () => {
    return <ButtonStory step="HandleCheck" />;
  })
  .add('Delete', () => {
    return <ButtonStory step="Delete" />;
  })
  .add('Disabled', () => {
    return <ButtonStory step="Disabled" />;
  });

storiesOf('Input', module)
  .addDecorator(story => (
    <View style={{backgroundColor: palette.black, height: 500, padding: 10}}>
      <View>{story()}</View>
    </View>
  ))
  .add('Primary', () => {
    return <InputStory step="Primary" />;
  });

storiesOf('Card', module)
  .addDecorator(story => (
    <View style={{backgroundColor: palette.black, height: 500, padding: 10}}>
      <View>{story()}</View>
    </View>
  ))
  .add('Primary', () => {
    return <CardStory step="Primary" />;
  });
