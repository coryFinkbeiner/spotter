import { useEffect, useState } from 'react';
import useAuth from "./hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from 'axios';

// const spotifyApi = new SpotifyWebApi({
//   clientId: "b5fd7277f6654b3e881be98a94afd5fc",
// });

const useSpotifyAPI = (accessToken) => {


  const getMyPlaylists = async () => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/me/playlists`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data

    } catch (error) {
    }
  };

  return {
    getMyPlaylists
  }

};

export default useSpotifyAPI;