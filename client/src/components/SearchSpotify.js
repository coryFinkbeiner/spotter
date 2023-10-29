import React, { useEffect, useState } from 'react';
import useSpotifyAPI from '../useSpotifyAPI';
import { useData } from '../DataProvider';

function SearchSpotify() {
  const { t } = useData()

  const [ q, setQ ] = useState(null);
  const [ type, setType ] = useState(null);

  const searchResults = useSpotifyAPI(t, 'search', 'GET', {
    q: 'test',
    type: 'track',
  })

  console.log({searchResults})

  return (
    <div>SearchSpotify</div>
  )
}

export default SearchSpotify