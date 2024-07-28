import React from "react";
import { AppProviders } from "./providers/AppProviders";
import { MuiMode } from "./components/mui/MuiMode";
import { Application } from "./components/application/Application";
import { Counter } from "./components/counter/Counter";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Application />
        <Counter />
      </div>
    </AppProviders>
  );
}

export default App;
