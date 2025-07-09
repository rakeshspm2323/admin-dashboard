import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [toglePopup, setToglePopup] = useState(false);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated, setToglePopup, toglePopup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
