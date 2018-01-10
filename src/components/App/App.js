import React, { Component } from 'react';
import "./App.less"
import i18n from 'i18next';

class App extends Component {
  render() {
    console.log("render");
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{i18n.t('title')}</h1>
        </header>
        <p>
          Hello !
        </p>
      </div>
    );
  }
}

export default App;
