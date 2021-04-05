import { ThemeProvider } from "styled-components";
import { modalTheme } from "../../../components/Theme";
import { WithThemeProps } from "./types";

const WithTheme = ({ children }: WithThemeProps) => (
  <ThemeProvider theme={modalTheme}>{children}</ThemeProvider>
);

export default WithTheme;
