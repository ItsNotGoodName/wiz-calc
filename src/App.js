import React, { Component } from "react";
import Main from "./components/Main";
import { SpellContextProvider } from "./contexts/spell-context";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SpellContextProvider>
          <Main></Main>
        </SpellContextProvider>
      </div>
    );
  }
}

export default App;
