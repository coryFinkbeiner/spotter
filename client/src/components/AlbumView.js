import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';

function AlbumView() {

  const { inView } = useDataContext()

  return (
    <div>{inView.name}</div>
  )
}

export default AlbumView




// no top bar

// what determines the color? seems like it is based on the album's color scheme. will need to find out, but probably not right now.

// no play button, heart, (...)

// will i include the heart? maybe but not first iteration

// tracks will have a plus symbol, to add to end of queue. in future iteration, hover-over will say 'Add to End of Queue'

// my track versions will be more narrow, equal parts to My Queue




//* all Liked track considerations are pushewd to future