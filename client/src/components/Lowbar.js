import React from 'react'
import { useDataContext } from '../hooks/useDataContext';

function Lowbar() {
  const { dispatch } = useDataContext()

  return (
    <div
      style={{
        height: 'full',
        width: '770px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: 2,
        backgroundColor: 'green',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          backgroundColor: 'red',
          height: '100%',
          width: '29%'
        }}
      >
      </div>
      <div
        style={{
          backgroundColor: 'lightblue',
          height: '100%',
          width: '42%'
        }}
      >
      </div>
      <div
        style={{
          backgroundColor: 'pink',
          height: '100%',
          width: '29%'
        }}
      >
      </div>

    </div>
  )
}

export default Lowbar

// onClick={() => {
//   dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'QueueView' })
// }}