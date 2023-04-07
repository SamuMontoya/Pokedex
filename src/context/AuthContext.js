import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  user: undefined,
  login: () => {},
  loout: () => {},
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = (userData) => {
    setAuth(undefined);
  };

  const valueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
