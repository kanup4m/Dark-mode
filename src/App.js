import React from 'react';
import './App.css';
import Main from './components/main';
import ContextProvider from './components/Context';
function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>

  );
}

export default App;
