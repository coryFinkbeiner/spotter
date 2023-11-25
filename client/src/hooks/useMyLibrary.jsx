import axios from 'axios';
import React, { useEffect, useState } from 'react';

function useMyLibrary( accessToken ) {
  const [ myPlaylists, setMyPlaylists ] = useState(null)
  const [ myAlbums, setMyAlbums ] = useState(null)

  useEffect(() => {
    (async () => {
      try {

        const albumResponse = await axios({
          method: 'GET',
          url: `https://api.spotify.com/v1/albums`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit: 50,
          },
        });

        const playlistResponse = await axios({
          method: 'GET',
          url: `https://api.spotify.com/v1/playlists`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit: 50,
          },
        });

        setMyPlaylists(playlistResponse.data)
        setMyAlbums(albumResponse.data)

      } catch (error) {
        console.log('API error', error);
      }
    })();

  }, [accessToken]);

  return {

      myAlbums,
      myPlaylists,

  }

}

export default useMyLibrary