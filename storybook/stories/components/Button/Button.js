import React, {useEffect} from 'react';
import GlobalFont from 'react-native-global-font';
import Button from '../../../../src/components/Button/Button';
import {palette, type} from '../../../../src/common.styles';

export default ButtonStory = ({step}) => {
  useEffect(() => {
    GlobalFont.applyGlobal('ApercuPro-Regular');
  }, []);

  const onPress = () => console.log('clicked');

  switch (step) {
    case 'Add':
      return (
        <Button
          title="+"
          variant="add"
          disabled={false}
          onPress={onPress}
          loading={false}
        />
      );
    case 'HandleCheck':
      return (
        <Button
          title="✔"
          variant="check"
          disabled={false}
          onPress={onPress}
          loading={false}
        />
      );
    case 'Delete':
      return (
        <Button
          title="🗑️"
          variant="delete"
          disabled={false}
          onPress={onPress}
          loading={false}
        />
      );
    case 'Disabled':
      return (
        <Button
          title="Disabled"
          variant="disabled"
          disabled={true}
          onPress={onPress}
          loading={false}
          textStyle={{color: palette.gray7}}
        />
      );
  }
};
