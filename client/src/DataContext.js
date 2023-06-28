import { createContext, useReducer } from 'react';

export const DataContext = createContext();

export const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CODE': {
      return {
        code: action.payload
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    code: null,
    myQueue: [
      "spotify:track:4iV5W9uYEdYUVa79Axb7Rh"
    ]
  });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context

  return (
    <DataContext.Provider value={{...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
