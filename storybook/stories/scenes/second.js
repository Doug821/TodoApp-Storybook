import React, {useEffect} from 'react';
import GlobalFont from 'react-native-global-font';
import Blank from '../../../src/Scenes/second/second';

export default SecondSceneStory = ({step}) => {
  useEffect(() => {
    GlobalFont.applyGlobal('ApercuPro-Regular');
  }, []);

  switch (step) {
    case 'Primary':
      return <Blank title="Wellcome to the Second Screen" />;
  }
};
