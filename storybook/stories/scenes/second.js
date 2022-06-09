import React, {useEffect} from 'react';
import GlobalFont from 'react-native-global-font';
import Second from '../../../src/Scenes/second/second';

export default SecondSceneStory = ({step}) => {
  useEffect(() => {
    GlobalFont.applyGlobal('ApercuPro-Regular');
  }, []);

  switch (step) {
    case 'Primary':
      return <Second title="Wellcome to the Second Screen" />;
  }
};
