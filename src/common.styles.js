import {Platform} from 'react-native';

// constants

export const spacing = {
  one: 12,
  two: 24,
  three: 36,
  four: 48,
};

export const palette = {
  white: '#ffffff',
  white10: 'rgba(255,255,255,0.1)',
  gray1: '#cccccc',
  gray2: '#848484',
  gray3: '#333333',
  gray4: '#212121',
  gray5: '#444444',
  gray6: '#1C1C1E',
  gray7: '#353537',
  gray8: '#777777',
  gray9: '#141415',
  gray10: '#2C2C2E',
  gray11: '#999999',
  green: '#01D992',
  black: '#000000',
  black10: 'rgba(0,0,0,0.1)',
  black50: 'rgba(0,0,0,0.5)',
  blue: '#1040E2',
  transparent: 'rgba(0,0,0,0)',
};

// style classes

export const flex = {
  centerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export const type = {
  bold: {
    fontFamily: 'ApercuPro-Medium',
  },
  sectionHeading: {
    fontSize: 32,
    color: palette.white,
    marginBottom: spacing.one,
  },
  heading1: {
    fontSize: 25,
    color: palette.white,
    fontFamily: 'ApercuPro-Medium',
    marginBottom: spacing.one,
  },
  heading2: {
    fontSize: 20,
    color: palette.white,
    fontFamily: 'ApercuPro-Medium',
  },
  bodyV2: {
    fontSize: 18,
    color: palette.white,
  },
  body: {
    fontSize: 16,
    color: palette.white,
  },
  small: {
    fontSize: 14,
    color: palette.gray2,
  },
  label: {
    fontSize: 12,
    color: palette.gray2,
  },
};
