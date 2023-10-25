// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const useSpotifyAPI = (accessToken) => {
//   const [ myPlaylists, setMyPlaylists ] = useState([]);
//   const [ myAlbums, setMyAlbums ] = useState([]);
//   // const [ myTopItems, setMyTopItems ] = useState([]);

//   const getMyPlaylists = async () => {
//     try {
//       const response = await axios.get(`https://api.spotify.com/v1/me/playlists`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       setMyPlaylists(response.data);
//     } catch (error) {
//       console.log('get Library error', error);
//     }
//   };

//   const getMyAlbums = async () => {
//     try {
//       const response = await axios.get(`https://api.spotify.com/v1/me/albums`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       setMyAlbums(response.data)
//     } catch (error) {
//       console.log('get Library error', error)
//     }
//   };


//   // const getMyTopTracks = async () => {
//   //   try {
//   //     const response = await axios.get(`https://api.spotify.com/v1/me/top/{tracks}`, {
//   //       headers: {
//   //         Authorization: `Bearer ${accessToken}`,
//   //       },
//   //     });
//   //     setMyTopItems(response.data)
//   //   } catch (error) {
//   //     console.log('get Top Items error', error)
//   //   }
//   // };



//   useEffect(() => {
//     if (!accessToken) return

//     getMyPlaylists();
//     getMyAlbums();
//     // getMyTopTracks();

//   }, [ accessToken ]);

//   return {
//     myPlaylists,
//     myAlbums,
//     // myTopTracks,
//   }

// };

// export default useSpotifyAPI;





import axios from 'axios';

const useSpotifyAPI = async ({ accessToken, endpoint, method = 'GET', data = null }) => {
  try {
    const response = await axios({
      method: method,
      url: `https://api.spotify.com/v1/${endpoint}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log('API error', error);
    return null;
  }
};

export default useSpotifyAPI;