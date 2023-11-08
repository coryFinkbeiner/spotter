// DataProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import useSpotifyAPI from './useSpotifyAPI';
import useSpotifyAuth from './useSpotifyAuth';

const DataContext = createContext();

const DataProvider = ({ code, children }) => {
  const t = useSpotifyAuth(code);
  const [ selection, setSelection ] = useState(null);
  const myPlaylists = useSpotifyAPI(t, 'me/playlists');
  const myAlbums = useSpotifyAPI(t, 'me/albums');

  const value = {
    myPlaylists,
    myAlbums,
    selection,
    setSelection,
    t,
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