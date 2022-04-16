import { DefaultTheme } from 'styled-components';
import * as Color from 'color';

import colors from './colors';

const theme: DefaultTheme = {
  borderRadius: '16px',

  colors: {
    background: {
      hero: colors.yellowVivid200.hex(),
      primary: colors.grey050.hex(),
    },

    fill: {
      hero: colors.yellowVivid050.hex(),
      primary: 'white',
    },

    text: {
      // TODO: Use tinted greys for hero text
      heroPrimary: colors.grey900.hex(),
      heroSecondary: colors.grey600.hex(),
      primary: colors.grey900.hex(),
      secondary: colors.grey600.hex(),
    },
  },
};

export default theme;
