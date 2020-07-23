import React from "react";

import Navbar from "comps/layout/Navbar";
import Home from "pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Home />
      </Navbar>
    </div>
  );
}

export default App;
