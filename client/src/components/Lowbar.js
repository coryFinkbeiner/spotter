import React from 'react'
import { useDataContext } from '../hooks/useDataContext';
import { PlayIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'

function Lowbar() {
  const { dispatch } = useDataContext()

  return (
    <div
      style={{
        height: 'full',
        width: '770px',
        minWidth: '770px',
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

      {/* Center */}
      <div
        style={{
          backgroundColor: 'lightblue',
          height: '100%',
          width: '42%',
          display: 'flex',
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'center',
          flexAlign: 'bottom',
        }}
      >
        <div
          style={{
            backgroundColor: 'green',
            height: '60%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >

          <ChevronLeftIcon
            style={{
              color: 'white',

            }}
          />
          <PlayIcon
            style={{
              color: 'white',
              padding: '0px 12px 0px 12px'
            }}
          />
          <ChevronRightIcon
            style={{
              color: 'white',
            }}
          />



        </div>

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