import React, {useEffect} from 'react';
import GlobalFont from 'react-native-global-font';
import Card from '../../../src/components/Card/Card';

export default CardStory = ({step}) => {
  useEffect(() => {
    GlobalFont.applyGlobal('ApercuPro-Regular');
  }, []);

  switch (step) {
    case 'Primary':
      return <Card title="Task 1" />;
  }
};
