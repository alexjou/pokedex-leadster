import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Routes/MainRoutes';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
