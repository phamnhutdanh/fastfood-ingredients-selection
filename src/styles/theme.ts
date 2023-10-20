import {createTheme} from '@rneui/themed';
import colors from './colors';

export const theme = createTheme({
  lightColors: {
    primary: '#899656',
  },
  darkColors: {
    primary: '#344512',
  },
  mode: 'light',
  components: {
    Tab: {
      indicatorStyle: {
        backgroundColor: colors.secondary,
        height: 3,
      },
      buttonStyle: {
        paddingHorizontal: 0,
        paddingBottom: 0,
      },
    },
    TabItem: {
      titleStyle: active => ({
        fontSize: 12,
        color: active ? colors.secondary : colors.lightGrey,
        fontWeight: 'normal',
      }),
    },
  },
});
