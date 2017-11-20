import React, { Component } from 'react';
import "./App.less"

class App extends Component {
  render() {
    console.log("render");
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple react App</h1>
        </header>
        <p>
          Hello !
        </p>
      </div>
    );
  }
}

export default App;
