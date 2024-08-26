import React, { createContext, ReactNode, useState } from "react";
import { User } from "../types";

interface AuthContextType {
  currentUser: User | undefined;
  setCurrentUser: (newValue: User) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthContextProvider: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
