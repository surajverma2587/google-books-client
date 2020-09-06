import React from "react";
import { HashRouter } from "react-router-dom";

import Navigation from "./NavBar";
import Routes from "./Routes";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <div className="container my-4">
        <Routes />
      </div>
    </HashRouter>
  );
};
export default App;
