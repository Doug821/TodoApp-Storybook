import React, {useEffect} from 'react';
import GlobalFont from 'react-native-global-font';
import GetCep from '../../../src/Scenes/getCep/GetCep';

export default GetCepStory = ({step}) => {
  useEffect(() => {
    GlobalFont.applyGlobal('ApercuPro-Regular');
  }, []);

  switch (step) {
    case 'Primary':
      return <GetCep title="Wellcome to the Second Screen" />;
  }
};
