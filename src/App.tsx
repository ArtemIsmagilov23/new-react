import React, { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        onChange={(event) => setValue(event.target.value)}
        maxLength={12}
      />
      <h1>{value}</h1>
    </div>
  );
}

export default App;
