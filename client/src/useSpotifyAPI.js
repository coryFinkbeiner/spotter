import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useSpotifyAPI = (accessToken) => {
  const [ myPlaylists, setMyPlaylists ] = useState([])
  const [ myAlbums, setMyAlbums ] = useState([])

  const getMyPlaylists = async () => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/me/playlists`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setMyPlaylists(response.data)
    } catch (error) {
      console.log('get Library error', error)
    }
  };

  const getMyAlbums = async () => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/me/albums`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setMyAlbums(response.data)

    } catch (error) {
      console.log('get Library error', error)
    }
  };


  useEffect(() => {
    if (!accessToken) return

    getMyPlaylists();
    getMyAlbums()

  }, [accessToken]);

  return {
    myPlaylists,
    myAlbums
  }

};

export default useSpotifyAPI;