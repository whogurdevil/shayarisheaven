import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Main component
const Main = () => {
  // Determine if user prefers dark mode
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  // Common style overrides
  const globalStyleOverrides = {
    "::selection": {
      background: "white",
      color: "black",
    },
    "::-moz-selection": {
      background: "white",
      color: "black",
    },
  };

  // Create light theme
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#62fcaf",
      },
      secondary: {
        main: "#f50057",
      },
      success: {
        main: "#00ff0d",
      },
      error: {
        main: "#ee2400",
      },
      background: {
        default: "#ffffff",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: globalStyleOverrides,
      },
    },
  });

  // Create dark theme
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#F9F4DA",
      },
      secondary: {
        main: "#FCBA28",
      },
      tertiary: {
        main: "#DE1E3A",
      },
      success: {
        main: "#00ff0d",
      },
      error: {
        main: "#ee2400",
      },
      background: {
        default: "#231F20",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: globalStyleOverrides,
      },
    },
  });

  // Choose theme based on user preference
  const theme = darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

// Render the main component
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root"),
);
