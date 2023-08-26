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
      }}
    >


      <div
        style={{
          color: 'white',
          fontWeight: 'bold'
        }}
        onClick={() => {
          // dispatch({ type: 'VIEW_IN_CONSOLE', payload: playlist })
          dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'QueueView' })
        }}
      >
        QUEUE
      </div>


    </div>
  )
}

export default Lowbar