import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';

function PlaylistView() {

  const { inView } = useDataContext()

  return (
    <div>{inView.name}</div>
  )
}

export default PlaylistView