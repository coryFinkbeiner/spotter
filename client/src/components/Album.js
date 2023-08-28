import React from 'react'
import { useDataContext } from '../hooks/useDataContext';


function Album({
  index,
  imageURL,
  albumName,
  artistName,

}) {

  const { dispatch } = useDataContext()

  return (
    <div
      style={{
        backgroundColor: 'grey',
        height: '194px',
        width: '127px',
        margin: '0px 0px -21px 0px'
      }}
    >
      jjjj
    </div>
  )
}

export default Album