import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import { theme } from "themes/main";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
