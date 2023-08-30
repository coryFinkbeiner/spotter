import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';

function ArtistView() {

  const { inView } = useDataContext()

  return (
    <div>{inView.artistName}</div>
  )
}

export default ArtistView

