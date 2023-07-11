import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';

function Sidebar() {

  const { accessToken, dispatch } = useDataContext();



  return (
    <div>-------------------Sidebar------------
    <div>{accessToken}</div>
    </div>
  )
}

export default Sidebar

// bring in accessToken



// HTML
// 3 radio buttons: Liked Songs, Albums, Playlists
// one dropdown menu with a field next to it that shows the current selection. (recently added, etc.)

// no dispatches here? just GET my music?

// should auto load whenever you switch dropdown or radio option... should default load with liked songs... not sure if there are any options for Liked songs... will probably have to change available options based on radio choice as well.


// linit to 20, infinite scrolling later

// useState
// setRadio, setDropdown
