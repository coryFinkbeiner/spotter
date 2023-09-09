import { createContext, useReducer } from 'react';
import React, { useState, useEffect }  from 'react'
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

    // case 'POP_QUEUE':
    //   const newQueue = state.myQueue;
    //   const pop = newQueue.shift();
    //   return {
    //     ...state,
    //     myQueue: newQueue,
    //     poppedTrack: pop
    //   }

    // case 'CLEAR_POP':
    //   return {
    //     ...state,
    //     poppedTrack: null
    //   }




    case 'ADD_TO_QUEUE':
      const newQueue2 = [...state.myQueue];
      newQueue2.push(action.payload)
      const next2 = newQueue2[0]
      return {
        ...state,
        myQueue: newQueue2,
        nextTrack: next2
      }

    case 'CLEAR_QUEUE':
      return {
        ...state,
        myQueue: [],
        nextTrack: null
      }

    case 'SHIFT_QUEUE':
      const newQueue = [...state.myQueue]
      const next = newQueue.shift()
      return {
        ...state,
        myQueue: newQueue,
        nextTrack: next
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
    nextTrack: null,

    poppedTrack: null,


    consoleViewType: '',
    inView: {},
    playlistData: {},
    albumData: {},
  });

  return (
    <DataContext.Provider value={{...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
