// DataProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import useSpotifyAPI from './useSpotifyAPI';
import useSpotifyAuth from './useSpotifyAuth';

const DataContext = createContext();

const DataProvider = ({ code, children }) => {
  const accessToken = useSpotifyAuth(code);

  const [ selection, setSelection ] = useState(null)

  const myPlaylists = useSpotifyAPI(accessToken, 'me/playlists');
  const myAlbums = useSpotifyAPI(accessToken, 'me/albums');


  const value = {
    myPlaylists,
    myAlbums,
    selection,
    setSelection,
    accessToken,
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