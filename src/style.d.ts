// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      light: string;
      dark: string;
    };
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  }
}