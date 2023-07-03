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
      "spotify:track:3kep7ZWLCMAsSDhEOI6eeu",
      "spotify:track:0VrBoQvHLNq9PBPJxQrNNf",
      "spotify:track:5ER4CebTR7M7JEV9XE5quI"
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
