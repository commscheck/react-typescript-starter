import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      background: {
        hero: string;
        primary: string;
      };

      fill: {
        hero: string;
        primary: string;
      };

      text: {
        heroPrimary: string;
        heroSecondary: string;
        primary: string;
        secondary: string;
      };
    };
  }
}
