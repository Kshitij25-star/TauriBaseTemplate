
import React, { createContext, useState, useEffect } from 'react';
import { RecordModel, RecordAuthResponse } from 'pocketbase';
import pb from '@/services/pockebase';

interface AuthContextType {
  auth: RecordModel | null;
  login: (email: string, password: string) => Promise<RecordAuthResponse<RecordModel>>;
  logout: () => void;
}

// Create the context
export const AuthContext = createContext<AuthContextType | null>(null);

import { ReactNode } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Keep track of the currently logged-in PocketBase model
  const [auth, setAuth] = useState(pb.authStore.model);

  useEffect(() => {
    // Listen for token or model changes (login/logout events)
    pb.authStore.onChange(() => {
      setAuth(pb.authStore.model);
    });
  }, []);

  // Example login function using PB's Auth
  const login = async (email: string, password: string) => {
    return pb.collection('users').authWithPassword(email, password);
  };

  // Example logout
  const logout = () => {
    pb.authStore.clear();
    setAuth(null);
  };

  // Provide the current user/staff record and auth actions
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
