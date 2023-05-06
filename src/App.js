import logo from './logo.svg';
import './App.css';
import AppRouter from 'presentation/routes/app_router';
import React from 'react';

function App() {
  return (
    <div className="App">
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
