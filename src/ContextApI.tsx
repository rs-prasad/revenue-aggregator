import React, { ReactNode, useContext, useReducer } from "react";
import { rootReducer } from "./reducer/reducer";
import { initialState } from "./reducer/reducer";

interface props {
  children: ReactNode;
}

interface contextInterface {
  store: storeInterface;
  dispatch: React.Dispatch<{
    type: string;
    payload: any;
  }>;
}

const AppContext = React.createContext<contextInterface | undefined>(undefined);

const ContextAPI = ({ children }: props) => {
  /*****************************  reducer initialization  *****************************/
  const [store, dispatch] = useReducer(rootReducer, initialState);

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  const value = useContext(AppContext);
  if (!value) throw new Error("Invalid context and its values");
  return value;
};

export default ContextAPI;
