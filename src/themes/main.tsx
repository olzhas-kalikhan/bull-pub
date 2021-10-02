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
      paper: "#051937",
      default: "#051937",
    },
    transparent: "rgba(5, 20, 38,0.85)",
    divider: "rgba(255,255,255,0.30)",
  },
  typography: {
    fontFamily: ["Maven Pro", "Martel Sans", "Roboto"].join(","),
    fontWeightMedium: 600,
  },
});

theme.typography.h1 = {
  fontFamily: "Maven Pro",
  fontWeight: 900,
  fontSize: "3.6rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "4rem",
  },
};
theme.typography.h2 = {
  fontFamily: "Martel Sans",
  fontSize: "2.2rem",
  textShadow: "0em 0.1em 0.5em #000",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
};
theme.typography.h3 = {
  fontFamily: "Martel Sans",
  fontWeight: 500,
  fontSize: "2rem",

  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};
theme.typography.h4 = {
  fontFamily: "Martel Sans",
  fontWeight: 500,
  fontSize: "1.8rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};
theme.typography.h5 = {
  fontFamily: "Maven Pro",
  fontWeight: 800,
  fontSize: "1rem",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
};
theme.typography.h6 = {
  fontFamily: "Martel Sans",
  fontWeight: 500,
  fontSize: "0.8rem",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};
theme.typography.body2 = {
  fontFamily: "Roboto",
  fontSize: "1.5rem",
};
theme.typography.subtitle1 = {
  fontSize: "1rem",
  fontWeight: 500,
  opacity: 0.9,
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
};
theme.typography.caption = {
  fontSize: "0.9rem",
  fontWeight: 300,
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
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
