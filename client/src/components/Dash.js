import React from 'react'
import { NavLink } from 'react-router-dom';

function Dash() {
  return (
    <div
      style={{
        backgroundColor: 'black'
      }}

    >
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/MySpotify'>My Spotify</NavLink>

    </div>
  )
}

export default Dash