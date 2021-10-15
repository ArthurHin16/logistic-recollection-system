import { FC, useState, createContext } from "react";

interface IAuthData {
  userState: any;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthData>({
  userState: null,
  login: () => null,
  logout: () => null,
});

export const AuthProvider: FC = ({ children }): JSX.Element => {
  const [userState, setUser] = useState<boolean>(false);

  const logout = () => {
    setUser(false);
  }

  const login = (): void => {
    setUser(true);
  };

  return (
    <AuthContext.Provider
      value={{
        userState,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
