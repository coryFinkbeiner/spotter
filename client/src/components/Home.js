
import React, { useState, useEffect } from 'react';
import { useDataContext } from '../hooks/useDataContext';

function Home() {

  const { user } = useDataContext()



  return (
    <div
      style={{
        color: 'white',
      }}
    >Hello, {user?.username}</div>
  )
}

export default Home