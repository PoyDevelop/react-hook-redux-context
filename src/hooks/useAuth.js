import React, { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext();


export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("TesterKung");


  const values = {
    user,
    setUser
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};
