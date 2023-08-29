import React from 'react'
import { useDataContext } from '../hooks/useDataContext';


function Album({
  index,
  imageURL,
  albumName,
  artistName,
  release_date,
  item

}) {

  const { dispatch } = useDataContext()

  return (
    <div
      onClick={() => {
        dispatch({
          type: 'VIEW_IN_CONSOLE', payload: {
            test: 'test',
            hello: 'hello'
          }
        })
        dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'AlbumView' })
      }}
      style={{
        backgroundColor: 'grey',
        height: '177px',
        width: '127px',
        margin: '0px 0px -21px 0px',
        borderRadius: '5px',
        padding: '8px 8px 8px 8px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: 'pointer',
      }}
    >

      <img
        src={imageURL}
        style={{
          borderRadius: '5px',
          // margin: '2px',
          width: '100%',
          paddingBottom: '6px',

        }}
      />
        <div
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '15px',
            paddingBottom: '2px'
          }}
        >
          {albumName}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            color: 'lightgrey',
            fontSize: '12px',
          }}
        >
          <div
            style={{

            }}
          >
            {release_date.split('-')[0] + ' '} &#x2022; {' ' + artistName}
          </div>
        </div>

    </div>
  )
}

export default Album