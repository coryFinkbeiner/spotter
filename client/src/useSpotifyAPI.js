import { useEffect, useState } from 'react';
import useAuth from "./hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import axios from 'axios';

const spotifyApi = new SpotifyWebApi({
  clientId: "b5fd7277f6654b3e881be98a94afd5fc",
});

const useSpotifyAPI = () => {

  const [code, setCode] = useState(null);
  const [currentAccessToken, setCurrentAccessToken] = useState(null);

  useEffect(() => {
    if (code) return
    const newCode = new URLSearchParams(window.location.search).get("code")
    setCode(code);
  }, [code, accessToken]);


  useEffect(() => {
    if (accessToken) return
    const accessToken = useAuth(code)
    setCurrentAccessToken(accessToken)
  }, [currentAccessToken]);

  useEffect(() => {
    if (!currentAccessToken) return
    spotifyApi.setAccessToken(accessToken);
    setAccessToken(accessToken);
  }, [currentAccessToken]);


  return {

  };
};

export default useSpotifyAPI;