import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Track from './Track'

function HistoryView() {

  const { inView } = useDataContext()

  console.log({inView})

  return (
    <div
      style={{
        color: 'white'
      }}
    >HistoryView</div>
  )
}

export default HistoryView