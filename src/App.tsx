import React from 'react';
import AppRouter from './routs/AppRouter';
import axios from 'axios';


axios.defaults.withCredentials=true;


function App() {

  return (
    <>
    <AppRouter/>
    </>
  );
}

export default App;
