import React, {useEffect} from 'react';
import GlobalFont from 'react-native-global-font';
import Input from '../../../../src/components/Input/Input';

export default InputStory = ({step}) => {
  useEffect(() => {
    GlobalFont.applyGlobal('ApercuPro-Regular');
  }, []);

  const onChangeText = () => console.log('clicked');

  switch (step) {
    case 'Primary':
      return (
        <Input
          value=""
          placeholder="Add a new task"
          disabled={false}
          onChangeText={onChangeText}
        />
      );
  }
};
