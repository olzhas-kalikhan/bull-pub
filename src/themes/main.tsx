import { createTheme, responsiveFontSizes } from "@mui/material/styles";
let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F2F2F2",
    },
    secondary: {
      main: "#FE2626",
    },
    background: {
      paper: "#051426",
      default: "#051426",
    },
    divider: "rgba(255,255,255,0.30)",
  },
  typography: {
    fontFamily: "'Lato','Coda'",
    fontWeightMedium: 600,
  },
});
theme.breakpoints.values.xl = 9000;
theme.typography.h1 = {
  fontFamily: "Coda",
  fontWeight: "bold",
  fontSize: "3.6rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "4rem",
  },
};
theme.typography.h2 = {
  fontSize: "2.2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
};
theme.typography.h3 = {
  fontFamily: "Coda",
  fontWeight: 500,
  fontSize: "2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};
theme.typography.h4 = {
  fontWeight: 500,
  fontSize: "1.8rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
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
export { theme };
// darkBlue: "#011C26",
// red: "#FE2626",
