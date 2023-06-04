"use client";
import { useLocalStorage } from "browser_storage_hook_react";
import { createContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [userData] = useLocalStorage("userData", "");

  return (
    <Context.Provider
      value={{
        userData,
      }}
    >
      {children}
      <ToastContainer pauseOnFocusLoss={false} />
    </Context.Provider>
  );
};

export default ContextProvider;
