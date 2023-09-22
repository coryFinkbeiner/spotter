import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Track from './Track'

function HistoryView() {

  const { inView } = useDataContext()



  return (
    <div>HistoryView</div>
  )
}

export default HistoryView