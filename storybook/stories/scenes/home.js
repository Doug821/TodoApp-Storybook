import React, {useEffect} from 'react';
import GlobalFont from 'react-native-global-font';
import Home from '../../../src/Scenes/home/home';

export default HomeSceneStory = ({step}) => {
  useEffect(() => {
    GlobalFont.applyGlobal('ApercuPro-Regular');
  }, []);

  switch (step) {
    case 'Primary':
      return <Home title="Wellcome to the Home Screen" />;
  }
};
