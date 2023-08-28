import React from 'react'
import { useDataContext } from '../hooks/useDataContext';


function Album({

}) {

  const { dispatch } = useDataContext()

  return (
    <div
      style={{
        backgroundColor: 'grey',
        height: '194px',
        width: '127px'
      }}
    >

    </div>
  )
}

export default Album