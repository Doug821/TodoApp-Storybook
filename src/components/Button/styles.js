import {type, spacing, palette} from '../../common.styles';

const buttonBase = {
  width: '12%',
  paddingVertical: spacing.one * 1.3,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 12,
  alignSelf: 'center',
};

const buttonBaseModal = {
  width: '100%',
  paddingVertical: spacing.one * 0.75,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
  alignSelf: 'center',
};

export const addButton = {
  button: {
    ...buttonBase,
    backgroundColor: '#8E75E3',
  },
  disabled: {
    ...buttonBase,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  title: {
    ...type.body,
    color: palette.black,
  },
};

export const deleteButton = {
  button: {
    ...buttonBase,
    backgroundColor: palette.transparent,
  },
  disabled: {
    ...buttonBase,
    backgroundColor: palette.transparent,
  },
  title: type.body,
};

export const primaryButtonModal = {
  button: {
    ...buttonBaseModal,
    backgroundColor: palette.blue,
    marginBottom: spacing.one,
  },
  disabled: {
    ...buttonBaseModal,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  title: {
    ...type.bold,
    ...type.small,
    color: palette.white,
  },
};

export const secondaryButtonModal = {
  button: {
    ...buttonBaseModal,
    backgroundColor: palette.gray5,
  },
  disabled: {
    ...buttonBaseModal,
    backgroundColor: palette.transparent,
  },
  title: {
    ...type.small,
    color: palette.gray1,
  },
};

export const checkButton = {
  button: {
    ...buttonBase,
    backgroundColor: palette.transparent,
  },
  disabled: {
    ...buttonBase,
    backgroundColor: palette.gray6,
  },
  title: {
    ...type.bodyV2,
  },
};
