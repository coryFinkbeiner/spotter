import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SpotifyWebApi from "spotify-web-api-node"
import useAuth from "../hooks/useAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: "b5fd7277f6654b3e881be98a94afd5fc",
})

function Search() {
  const accessToken = useAuth()
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          q: query,
          type: 'track',
        },
      });

      // Handle the search results
      console.log('search res', response.data); // You can access the search results in response.data
      // Dispatch an action to update your state with the search results
      // For example:
      // dispatch({ type: 'SET_SEARCH_RESULTS', results: response.data.tracks.items });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search


// start with just searching songs