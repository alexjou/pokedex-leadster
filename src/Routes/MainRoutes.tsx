import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Pokemon from '../Pages/Pokemon';
import Profile from '../Pages/Profile';

function MainRoutes(): JSX.Element {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Profile />} path="/perfil" />
      <Route element={<Login />} path="/login" />
      <Route element={<Pokemon />} path="/pokemon" />
    </Routes>
  );
}

export default MainRoutes;
