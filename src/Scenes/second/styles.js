import {spacing, palette} from '../../common.styles';

export const cardTitle = {
  width: '70%',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 12,
  alignSelf: 'center',
};

export const cardView = {
  width: '100%',
  backgroundColor: palette.gray1,
  borderRadius: 12,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

export const inputContainer = {
  marginTop: spacing.one,
  width: '100%',
  backgroundColor: palette.transparent,
  borderRadius: 12,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const cardsContainer = {
  marginTop: spacing.four,
  width: '100%',
  backgroundColor: palette.transparent,
  borderRadius: 12,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const contentWrapper = {
  width: '100%',
  height: '100%',
  padding: 10,
  backgroundColor: palette.gray11,
};
