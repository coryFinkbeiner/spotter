import React from 'react'
// import useAuth from "../hooks/useAuth";
// import SpotifyWebApi from "spotify-web-api-node"
// import axios from "axios"
import MyQueue from './MyQueue'

// const spotifyApi = new SpotifyWebApi({
//   clientId: "b5fd7277f6654b3e881be98a94afd5fc",
// })


function Dashboard() {



  return (
    <div>Dashboard
      <MyQueue />
    </div>
  )
}

export default Dashboard