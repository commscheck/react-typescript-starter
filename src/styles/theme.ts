import { DefaultTheme } from 'styled-components';
import * as Color from 'color';

import colors from './colors';

const theme: DefaultTheme = {
  borderRadius: '8px',

  colors: {
    background: colors.grey050.hex(),
    fill: Color('white').hex(),
    border: colors.grey200.hex(),
  },
};

export default theme;
