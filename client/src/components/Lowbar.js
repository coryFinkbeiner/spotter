import React from 'react'
import { useDataContext } from '../hooks/useDataContext';

function Lowbar() {
  const { dispatch } = useDataContext()

  return (
    <div
      style={{
        height: 'full',
        width: '780px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: 2,
        backgroundColor: 'green'
      }}
    >
      <div
        style={{
          color: 'white',
          fontWeight: 'bold'
        }}
        onClick={() => {
          dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'QueueView' })
        }}
      >
        QUEUE
      </div>


    </div>
  )
}

export default Lowbar