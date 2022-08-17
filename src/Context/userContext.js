import { useContext, createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const useUserDetails = () => useContext(UserContext);

const UserDetailProvider = ({ children }) => {
  const [userName, setUserName] = useState({
    hasUserOnboarded: false,
    userName: '',
  });

  useEffect(() => {
    localStorage.setItem('chakra-ui-color-mode', 'dark');
    const isUserOnboarded = JSON.parse(
      localStorage.getItem('hasUserOnboarded')
    );
    const getUserNameFromLocalStorage = JSON.parse(
      localStorage.getItem('user')
    );
    if (isUserOnboarded) {
      setUserName(prev => ({
        userName: getUserNameFromLocalStorage,
        hasUserOnboarded: isUserOnboarded,
      }));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export { useUserDetails, UserDetailProvider };
