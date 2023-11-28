import {createTheme} from '@rneui/themed';
import colors from './colors';

export const theme = createTheme({
  lightColors: {
    primary: '#fff',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
  components: {
    Button: {
      containerStyle: {},
      buttonStyle: {
        backgroundColor: colors.primary,
        borderRadius: 12,
        padding: 0,
      },
      titleStyle: {
        color: colors.white,
      },
    },
    Input: {
      style: {},
      containerStyle: {
        backgroundColor: colors.lightGrey,
        paddingHorizontal: 20,
        paddingTop: 4,
        borderRadius: 12,
      },
      errorStyle: {},
      inputContainerStyle: {
        borderColor: 'transparent',
      },
      inputStyle: {
        color: colors.darkBlack,
        fontSize: 16,
      },
      labelStyle: {
        fontWeight: 'normal',
        color: colors.mediumGrey,
        fontSize: 12,
      },
      placeholderTextColor: colors.darkGrey,
      renderErrorMessage: false,
    },
    Tab: {
      indicatorStyle: {
        backgroundColor: colors.primary,
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
        color: active ? colors.primary : colors.darkBlack,
        fontWeight: 'normal',
      }),
    },
  },
});
