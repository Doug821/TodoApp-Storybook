import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import ButtonStory from './components/Button/Button';
import InputStory from './components/Input/Input';
import CardStory from './components/Card/Card';
import {palette} from '../../src/common.styles';
import HomeSceneStory from './scenes/home';
import SecondSceneStory from './scenes/second';

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

storiesOf('Home', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Primary', () => {
    return <HomeSceneStory step="Primary" />;
  });

storiesOf('Second', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Primary', () => {
    return <SecondSceneStory step="Primary" />;
  });
