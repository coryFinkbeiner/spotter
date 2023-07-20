import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlaylistView() {

  const { inView } = useDataContext()

  const { accessToken, dispatch } = useDataContext();

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${inView.id}/tracks`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setTracks(response.data.items);
      } catch (error) {
        console.log('Error fetching tracks:', error);
      }
    };

    fetchTracks();
  }, [accessToken, inView]);

  return (
    <div className='AlbumPlaylistView'>

      <div className='view-top'>
        <img className='view-top-img'
          src={inView.images[0]?.url}
        />
        <div className='view-top-info'>
          <div>
            {inView.owner.display_name} &middot;  {inView.tracks.total} songs, duration
          </div>
          <div>
            {inView.name}
          </div>
          <div>
            {inView.type.charAt(0).toUpperCase() + inView.type.slice(1)}
          </div>
        </div>
      </div>

      <div className="song-list">
        {tracks?.map((track, index) => (
          <div key={index} className="song-row">
            <div className="song-number">{index + 1}</div>
            <div className="song-title">{track.track.name}</div>
            <div className="song-album">{track.track.album.name}</div>
            <div className="song-clock">&#x23F1;</div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default PlaylistView

// href: "https://api.spotify.com/v1/playlists/5BcK7J67q1dG7AEHp05537/tracks"


// i think MVP is to just make the calls here, use the uri in the playlist response to grab the tracks.


// not includeing Data added


// black background for now, instead of fancy gradient

// looks like i might have to do a little math to get the duration, doesn't seem like it's available


// inView.primary_color may be the attribute i was looking for for the gradient

