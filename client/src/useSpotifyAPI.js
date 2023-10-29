import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useData } from './DataProvider';

const useSpotifyAPI = (
  accessToken,
  endpoint,
  method = 'GET',
  params,
) => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method,
          url: `https://api.spotify.com/v1/${endpoint}`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit: 50,
            ...params,
          },
        });
        setResponseData(response.data);
      } catch (error) {
        console.log('API error', error);
      }
    })();
  }, [accessToken]);

  return responseData;
};

export default useSpotifyAPI;