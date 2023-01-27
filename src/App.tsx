import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { UserProvider } from './Context/UserContext';
import MainRoutes from './Routes/MainRoutes';
import { initializeFirebase } from './services/Firebase/config.js';
import env from './services/Firebase/env.json';

export default function App(): JSX.Element {
  initializeFirebase(env);
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <MainRoutes />
      </UserProvider>
    </BrowserRouter>
  );
}
