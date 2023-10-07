import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Track from './Track'
import Album from './Album'

function ArtistView() {
  const { inView, accessToken } = useDataContext()

  const [ popularSongs, setPopularSongs ] = useState(null)
  const [ discography, setDiscography ] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumsResponse = await axios.get(`https://api.spotify.com/v1/artists/${inView.id}/albums`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setDiscography(albumsResponse.data)

        const topTracksResponse = await axios.get(`https://api.spotify.com/v1/artists/${inView.id}/top-tracks`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            market: 'US',
          },
        });
        setPopularSongs(topTracksResponse.data.tracks)

      } catch (error) {
        console.log('Error fetching artist data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        margin: '6px',
        padding: '2px',
        height: '100vh',
        borderRadius: '8px'
      }}
    >

      {/* Top */}
      <div
        style={{
          height: '230px',
          width: '100%',
          margin: '2px',
          padding: '4px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            background: `url(${inView.imageURL})`,
            backgroundSize: 'contain',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
          }}
        ></div>
        <div
          style={{
            color: 'white',
            position: 'absolute',
            bottom: '0',
            left: '0',
            margin: '12px',
            padding: '2px',
            fontWeight: 'bold',
            fontSize: '60px',
          }}
        >
          {inView.artistName}
        </div>
      </div>

      {/* Popular Songs */}
      <div>
        <div
          style={{
            color: 'white',
            fontSize: '22px',
            fontWeight: 'bold',
            marginTop: '18px',
            marginLeft: '8px',
          }}
        >Popular</div>
        <div>
          {popularSongs?.map((track, index) => {
            if (index > 4) return
            return (
              <Track
                key={index}
                index={index}
                image={track.album.images[0].url}
                trackName={track.name}
                albumName={track.album.name}
                duration_ms={track.duration_ms}
                uri={track.uri}
              />
            )
          })}
        </div>
      </div>

      {/* Discography */}
      <div>
        <div
          style={{
            color: 'white',
            fontSize: '22px',
            fontWeight: 'bold',
            marginTop: '18px',
            marginLeft: '8px',
          }}
          onClick={() => {
            console.log({discography})
          }}
        >Discography</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            height: '100%',
            alignItems: 'start',
            rowGap: '0',
          }}
        >
          {discography?.items.map((item, index) => (
            <Album
              index={index}
              imageURL={item.images[2].url}
              albumName={item.name}
              artistName={item.artists[0].name}
              release_date={item.release_date}
              item={item}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArtistView