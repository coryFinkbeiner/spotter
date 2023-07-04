import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SpotifyWebApi from "spotify-web-api-node"
import useAuth from "../hooks/useAuth";
import { useDataContext } from '../hooks/useDataContext'

// const spotifyApi = new SpotifyWebApi({
//   clientId: "b5fd7277f6654b3e881be98a94afd5fc",
// })

function Search() {
  // const accessToken = useAuth()
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({})

  const { accessToken, dispatch } = useDataContext()

  // useEffect(() => {
  //   if (!accessToken) return
  //   spotifyApi.setAccessToken(accessToken)
  // }, [accessToken])

  // const handleSearch = () => {
  //   spotifyApi.search(query, ['track'])
  //     .then(res => {
  //       console.log(res.data)
  //     })
  //     .catch(err => console.log(err))
  // };


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
      setResults(response.data)
      // Handle the search results
      console.log('search res', response.data.tracks.items); // You can access the search results in response.data
      // Dispatch an action to update your state with the search results
      // For example:
      // dispatch({ type: 'SET_SEARCH_RESULTS', results: response.data.tracks.items });
    } catch (error) {
      console.log('Search Error:', error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <div>access token {accessToken}</div>
      <input type="text" value={query} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results?.tracks?.items.map((track) => {

          return (
            <li
              key={track.id}
              onClick={() => dispatch({ type: 'ADD_TO_QUEUE', payload: track.name})}
            >
              <div>{track.name} - {track.artists[0].name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Search


// start with just searching songs