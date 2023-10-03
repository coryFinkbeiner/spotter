import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArtistView() {

  const { inView, accessToken } = useDataContext()


  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/artists/${inView.id}/albums`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log('ArtistView response.data', response.data)
      } catch (error) {
        console.log('Error fetching artist albums:', error);
      }
    })()
  }, [ ])


  return (
    <div>{inView.artistName}</div>
  )
}

export default ArtistView

