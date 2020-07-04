import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import styled, { ThemeProvider } from "styled-components";
import { darkMode } from "./themes/darkMode";
import { lightMode } from "./themes/lightMode";
import { atom, useRecoilValue } from "recoil";

export const isDarkModeAtom = atom<boolean>({
  key: "isDarkModeAtom",
  default: false,
});

const App: FC = () => {
  const isDarkMode = useRecoilValue(isDarkModeAtom);
  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/test">
            <div>test</div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
