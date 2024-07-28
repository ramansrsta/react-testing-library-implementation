import React from "react";
import { AppProviders } from "./providers/AppProviders";
import { MuiMode } from "./components/mui/MuiMode";
import { Application } from "./components/application/Application";
import { Counter } from "./components/counter/Counter";
import { CounterTwo } from "./components/counter-two/CounterTwo";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Application />
        {/* <Counter /> */}
        {/* <CounterTwo /> */}
      </div>
    </AppProviders>
  );
}

export default App;
