import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';

function Sidebar() {

  const { accessToken } = useDataContext();

  const [radio, setRadio] = useState('tracks')


  useEffect(() => {

    (async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/' + radio, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });
        console.log(response.data);
      } catch (error) {
        console.log('Get My Music Error:', error);
      }
    })()

  }, [accessToken])

  // i think this should be in a useEffect, with option as a dependency


  return (
    <div>-------------------Sidebar------------
    <div>{accessToken}</div>
    </div>
  )
}

export default Sidebar


// HTML
// 3 radio buttons: Tracks, Albums, Playlists
// one dropdown menu with a field next to it that shows the current selection. (recently added, etc.)

// no dispatches here? just GET my music?

// should auto load whenever you switch dropdown or radio option... should default load with liked songs... not sure if there are any options for Liked songs... will probably have to change available options based on radio choice as well.


// linit to 20, infinite scrolling later

// useState
// setRadio, setDropdown
