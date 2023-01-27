/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const setPersistAuth = (user: any) => {
  const userStringify = JSON.stringify(user);
  localStorage.setItem('@user', userStringify);
};

export const getPersistAuth = () => {
  const user = localStorage.getItem('@user');
  return JSON.parse(user || '');
};

export const deletePersistAuth = () => {
  const logout = localStorage.removeItem('@user');
  return logout;
};
