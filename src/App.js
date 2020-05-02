import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Layout/Content';
import loadFontawesome from './shared/loader';


loadFontawesome();
function App() {
  return (
    <Fragment>
      <div className="App mb-3 shadow">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <Content/>
    </Fragment>
  );
}

export default App;
