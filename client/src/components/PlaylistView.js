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

      <div className="song-list"
        style={{
          overflowY: 'auto',
            maxHeight: '460px'
        }}

      >
        {tracks?.map((track, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px',
              // borderBottom: '1px solid #ddd',  height: '60px',
            }}
          >
            <div
              style={{
                padding: '15px',
                color: 'grey',
              }}
            >
              {index + 1}
            </div>
            <img
              src={track.track.album.images[2]?.url}
              style={{
                height: '38px',
                borderRadius: '3px',
                margin: '2px',
              }}
          />
            <div
              style={{
                width: '225px'
              }}
            >
              <div
                style={{
                  color: 'white',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',

                }}
              >
                {track.track.name}
              </div>
              <div
                style={{
                  color: 'grey',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: '13px'
                }}
              >
                {track.track.artists[0].name}
              </div>
            </div>
            <div
                style={{
                  color: 'grey',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: '13px',
                  width: '160px'

                }}
              >
                {track.track.album.name}
              </div>

            <div
              style={{
                color: 'grey',
                fontSize: '13px',
              }}
            >
              3:30
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default PlaylistView

