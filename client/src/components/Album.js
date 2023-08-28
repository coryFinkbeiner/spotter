import React from 'react'
import { useDataContext } from '../hooks/useDataContext';


function Album({

}) {

  const { dispatch } = useDataContext()

  return (
    <div
      style={{
        backgroundColor: 'grey',
        height: '9px',
        width: '138px'
      }}
    >

    </div>
  )
}

export default Album