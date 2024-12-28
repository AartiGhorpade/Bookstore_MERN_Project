import { createContext, useContext, useState, useEffect } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // Load initial data from localStorage
  const initialData = localStorage.getItem('loginDetails');
  const [authUser, setAuthUser] = useState(() => {
    try {
      return initialData ? JSON.parse(initialData) : null;
    } catch (error) {
      console.error("Error parsing loginDetails from localStorage", error);
      return null;
    }
  });

  // Effect to sync authUser with localStorage
  useEffect(() => {
    if (authUser) {
      localStorage.setItem('loginDetails', JSON.stringify(authUser));
    } else {
      localStorage.removeItem('loginDetails');
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
