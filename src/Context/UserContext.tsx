/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { createTheme } from '@mui/material';
import {
  deletePersistAuth,
  getPersistAuth,
  setPersistAuth,
} from './localStorage';
import { IUser, IUserLogin } from '../interfaces';
import { fireAuth, fireStore } from '../services/Firebase/config.js';

export const UserContext = createContext({});

export function UserProvider({ children }: any) {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUserLogin>();
  const [themeUpdate, setThemeUpdate] = useState('light');
  const theme = createTheme({
    palette: {
      // @ts-expect-error: Unreachable code error
      mode: themeUpdate,
    },
  });
  console.log(user);

  const changeTheme = async () => {
    if (themeUpdate === 'light') {
      setThemeUpdate('dark');
      setPersistAuth({ ...user, theme: 'dark' });
    } else {
      setThemeUpdate('light');
      setPersistAuth({ ...user, theme: 'light' });
    }
  };

  async function loadStorage() {
    const storageUsers = getPersistAuth();
    if (storageUsers) {
      setUser(storageUsers);
      if (storageUsers?.theme) {
        setThemeUpdate(storageUsers.theme);
      }
    }
  }

  const signUp = async (data: IUser) => {
    let result;
    const create = await fireAuth.createUserWithEmailAndPassword(
      data.email,
      data.password,
    );
    if (create.user) {
      const { uid } = create.user;
      await fireStore.collection('users').doc(uid).set({
        uid,
        name: data.name,
        email: data.email,
        createdAt: new Date(),
      });
      // setUser(data)
      setPersistAuth(data);
      result = true;
    } else {
      result = false;
    }
    return result;
  };

  const signIn = async (data: IUser) => {
    try {
      await fireAuth.signInWithEmailAndPassword(data.email, data.password);
      const { uid } = fireAuth.currentUser;
      if (uid) {
        await fireStore
          .collection('users')
          .doc(uid)
          .get()
          .then((doc: any) => {
            const values = {
              id: uid,
              name: doc.data().name,
              email: doc.data().email,
            };
            setUser(values);
            setPersistAuth(values);
            navigate('/');
          });

        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const updateUser = async (data: IUser) => {
    try {
      await fireStore
        .collection('users')
        .doc(data.id)
        .update({ ...data, update_at: new Date() });
      return true;
      signIn(data);
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const signOut = async () => {
    await deletePersistAuth();
    // @ts-expect-error: Unreachable code error
    setUser({});
    navigate('/');
  };

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        signIn,
        signUp,
        signOut,
        updateUser,
        theme,
        themeUpdate,
        changeTheme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.any,
};

export default UserContext;
