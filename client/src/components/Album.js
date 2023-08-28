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
        width: '127px',
        margin: '0px 0px -18px 0px'
      }}
    >

    </div>
  )
}

export default Album