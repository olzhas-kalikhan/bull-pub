import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    transparent: string;
  }
  interface PaletteOptions {
    transparent?: string;
  }
}
let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F3F2E3",
    },
    secondary: {
      main: "#FE2626",
    },
    background: {
      default: "#16161d",
      paper: "#16161d",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: ["Work Sans", "Passion One", "Open Sans"].join(","),
    fontWeightMedium: 600,
  },
});
theme.typography.h2 = {
  ...theme.typography.h2,
  fontSize: "3rem",
  textTransform: "uppercase",
};
theme.typography.body2 = {
  ...theme.typography.body2,
  fontWeight: 200,
  letterSpacing: 1.5,
};
theme.typography.subtitle2 = {
  ...theme.typography.subtitle2,
  fontSize: "1.2rem",
  fontWeight: 400,
  textTransform: "uppercase",
};
theme.breakpoints.values.xl = 9000;
export { theme };
// darkBlue: "#011C26",
// red: "#FE2626",
//#04080D
//#0E1826
//#F3F2E3
//#B59F89
//#591111
