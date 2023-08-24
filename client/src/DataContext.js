import { createContext, useReducer } from 'react';

export const DataContext = createContext();

export const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CODE':
      return {
        ...state,
        code: action.payload
      }
    case 'SET_ACCESS_TOKEN':
      return {
        ...state,
        accessToken: action.payload
      }

    case 'STORE_PLAYLISTS':
      return {
        ...state,
        playlistData: action.payload
      };

    case 'STORE_ALBUMS':
      return {
        ...state,
        albumData: action.payload
      };

    case 'POP_QUEUE':
      const newQueue = [...state.myQueue];
      const pop = newQueue.pop();
      return {
        ...state,
        myQueue: newQueue,
        poppedTrack: pop,
      }
    case 'ADD_TO_QUEUE':
      const newQueue2 = [...state.myQueue];
      newQueue2.push(action.payload)
      return {
        ...state,
        myQueue: newQueue2
      }
    case 'VIEW_IN_CONSOLE':
      return {
        ...state,
        inView: action.payload
      }
    case 'CHANGE_VIEW_TYPE':
      return {
        ...state,
        consoleViewType: action.payload
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    code: null,
    accessToken: null,
    myQueue: [],
    poppedTrack: {},
    consoleViewType: 'Search',
    inView: {},
    playlistData: {},
    albumData: {}
  });

  return (
    <DataContext.Provider value={{...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
