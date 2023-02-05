import React from "react";

import Tutorial from "./components/Tutorial";
import GlobalStyle from "./components/styles/Global.styles";
import { ThemeProvider } from "styled-components";

export default class App extends React.Component {
  state = {
    themeColor: "dark",
  };
  themeSwitch = () => {
    const dark = this.state.themeColor;
    if (dark === "dark") {
      this.setState({
        themeColor: "light",
      });
    } else {
      this.setState({
        themeColor: "dark",
      });
    }
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider
          theme={{
            background: this.state.themeColor,
          }}
        >
          <Tutorial switchTheme={this.themeSwitch} />
        </ThemeProvider>
      </>
    );
  }
}
