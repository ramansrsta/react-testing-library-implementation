import React from "react";
import { AppProviders } from "./providers/AppProviders";
import { MuiMode } from "./components/mui/MuiMode";
import { Application } from "./components/application/Application";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Application />
      </div>
    </AppProviders>
  );
}

export default App;
