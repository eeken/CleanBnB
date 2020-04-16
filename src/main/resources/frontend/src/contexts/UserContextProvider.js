import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

export default function UserContextProvider(props) {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    let res = await fetch("/auth/whoami");
    try {
      res = await res.json();
      setUser(res);
    } catch {
      console.log("Not authenticated");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const values = {
    user,
    setUser,
    fetchUser,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}
