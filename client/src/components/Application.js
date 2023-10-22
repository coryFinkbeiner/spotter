// import React from 'react'
// import Console from './Console'
// import Dash from './Dash'
// import PlayerBar from './PlayerBar'
// import BeatBar from './BeatBar'
// import AppLayout from './AppLayout'


// function Application() {
//   return (
//     <AppLayout>
//       <Dash />
//       <Console />
//       <BeatBar />
//       <PlayerBar />
//     </AppLayout>
//   )
// }

// export default Application




import React from 'react'
import Console from './Console'
import Dash from './Dash'
import PlayerBar from './PlayerBar'
import BeatBar from './BeatBar'
import AppLayout from './AppLayout'

import useSpotifyAuth from '../useSpotifyAuth'
import useSpotifyAPI from '../useSpotifyAPI'


function Application({ code }) {

  const accessToken = useSpotifyAuth(code)

  const { getMyPlaylists } = useSpotifyAPI(accessToken)

  console.log(getMyPlaylists)


  return (
    <div>{accessToken}</div>
  )


  // return (
  //   <AppLayout>
  //     <Dash />
  //     <Console />
  //     <BeatBar />
  //     <PlayerBar />
  //   </AppLayout>
  // )
}

export default Application


