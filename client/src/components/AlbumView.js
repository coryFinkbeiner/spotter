import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';

function AlbumView() {

  const { inView } = useDataContext()

  return (
    <div>{inView.name}</div>
  )
}

export default AlbumView