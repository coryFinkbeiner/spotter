import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Track from './Track'

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



      <div className="song-list"
        style={{
          overflowY: 'auto',
          maxHeight: '460px'
        }}
      >
        {tracks?.map((track, index) => (
          <Track
            index={index}
            image={track.track.album.images[2]?.url}
            trackName={track.track.name}
            artistName={track.track.artists[0].name}
            albumName={track.track.album.name}
            duration_ms={1000}
            uri={track.track.uri}
          />
        ))}
      </div>
    </div>
  )
}

export default PlaylistView

