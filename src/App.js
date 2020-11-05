import React, { useState } from "react";
import AnimalForm from "./components/AnimalForm";

import "./App.css";

function App() {
  // const [user, setUser] = useState({}); //{name: '': email: ''}

  return (
    <div className="App">
      <h1>Add New Animal</h1>
      <AnimalForm />
      {/* <div>
        {user.name}:{user.email}
      </div> */}
    </div>
  );
}

export default App;
