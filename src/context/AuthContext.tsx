import { createContext, useState } from "react";

interface AuthContextProps {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: any) => {
  const [loggedIn, setLoggedIn] = useState(true);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
