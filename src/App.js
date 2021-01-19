import React, {useState} from 'react';
import './App.css';

function App() {
  const [string, setString] = useState([{string: "Test"}, {string: "Test2"}])

  return (
    <div className="App">
      <h1>{string[0].string}</h1>
    </div>
  );
}

export default App;
