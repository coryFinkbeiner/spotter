// DataProvider.js
import React, { createContext, useContext } from 'react';
import useSpotifyAPI from './useSpotifyAPI';
import useSpotifyAuth from './useSpotifyAuth';

const DataContext = createContext();

const DataProvider = ({ code, children }) => {
  const accessToken = useSpotifyAuth(code);
  const {
    myPlaylists,
   } = useSpotifyAPI(accessToken);

  const value = {
    myPlaylists,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export { DataProvider, useData };
