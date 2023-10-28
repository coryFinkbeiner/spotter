import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useSpotifyAuth from './useSpotifyAuth';

const useSpotifyAPI = ({
  accessToken,
  endpoint,
  method = 'GET',
  data = null
}) => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: method,
          url: `https://api.spotify.com/v1/${endpoint}?limit=50`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          data: data,
        });
        setResponseData(response.data);
      } catch (error) {
        console.log('API error', error);
      }
    })();
  }, [accessToken, endpoint, method, data])
  return responseData;
};

export default useSpotifyAPI;






