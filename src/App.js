import React from 'react';
import './App.css';
import { ComponentA } from './components/ComponentA';
import { CountProvider, CountConsumer } from './contexts/CountContext'

function App() {
  return (
    <CountProvider>
      <CountConsumer>
        {({ state }) => (
          <div className="App">
            { state }
            <ComponentA/>
          </div>
        )}
      </CountConsumer>
    </CountProvider>
  );
}

export default App;
