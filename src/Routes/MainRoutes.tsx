import { ThemeProvider } from '@mui/material';
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import { IUserContext } from '../interfaces';
import Home from '../Pages/Home';
import Pokemon from '../Pages/Pokemon';
import Profile from '../Pages/Profile';

export default function MainRoutes(): JSX.Element {
  // @ts-expect-error: Unreachable code error
  const { theme } = useContext<IUserContext>(UserContext);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Profile />} path="/perfil" />
        <Route element={<Pokemon />} path="/pokemon/:pokemonIndex" />
      </Routes>
    </ThemeProvider>
  );
}
