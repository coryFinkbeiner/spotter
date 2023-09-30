import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';

function SpotView() {

  const { inView } = useDataContext()


  return (
    <div>{inView && inView}</div>
  )
}

export default SpotView