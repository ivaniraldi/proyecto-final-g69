import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
    return (
        <UserContext.Provider value={{token}}>
          {children}
        </UserContext.Provider>
      );
    
}

export default UserProvider;