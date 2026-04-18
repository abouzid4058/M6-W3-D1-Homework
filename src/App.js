import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";
import { Provider as ReduxProvider } from "react-redux";
import DarkThemeProvider from "./DarkThemeProvider";
import DarkThemeToggle from "./DarkThemeToggle";
import store from "./redux/store";
import './App.css';

// Theme definitions
export const theme1 = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const theme2 = theme("theme", {
  light: "#000",
  dark: "#fff",
});

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${theme1};
  color: ${theme2};
`;

const SwitchTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 75px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${theme2};
`;

const App = () => {
  return (
    <React.Fragment>
      <ReduxProvider store={store}>
        <DarkThemeProvider>
          <Container>
            <SwitchTheme>
              <h1>Theme App</h1>
              <p>
                <DarkThemeToggle />
              </p>
            </SwitchTheme>
            <h2>Welcome!</h2>
            <h3>Full Stack Web Development</h3>
          </Container>
        </DarkThemeProvider>
      </ReduxProvider>
    </React.Fragment>
  );
};

export default App;
