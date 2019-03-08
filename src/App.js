import React, { Component } from 'react';
import './App.css';
import {Alert} from 'reactstrap'
import FormController from './FormController';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>
          Summer Associate Admin Panel - Proof of Concept
        </p>
      </header>
      <div className='App-main'>
        <main className="container">
            <FormController></FormController>
        </main>
      </div>
      <footer className="App-footer">
          <Alert color='info'>Under Development</Alert>
      </footer>
    </div>
    );
  }
}

export default App;
