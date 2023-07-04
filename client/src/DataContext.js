import { createContext, useReducer } from 'react';

export const DataContext = createContext();

export const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CODE':
      return {
        ...state,
        code: action.payload
      }
    case 'POP_QUEUE':
      const newQueue = [...state.myQueue];
      const poppedTrack = newQueue.pop();
      console.log('POP_QUEUE state.myQueue',state.myQueue)
      console.log('poppedTrack in POP_QUEUE', poppedTrack)
      return {
        ...state,
        myQueue: newQueue,
        poppedTrack: poppedTrack,
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
    ],
    poppedTrack: "spotify:track:3kep7ZWLCMAsSDhEOI6eeu"
  });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context

  return (
    <DataContext.Provider value={{...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
