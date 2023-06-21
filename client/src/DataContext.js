import { createContext, useReducer, useContext } from 'react';

const DataContext = createContext();

function dataReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { data: state.data + 1 };
    }
    case 'decrement': {
      return { data: state.data - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, {
    data: 0
  });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };

  return (
    <DataContext.Provider value={{state, dispatch}}>
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}

export { DataProvider };
