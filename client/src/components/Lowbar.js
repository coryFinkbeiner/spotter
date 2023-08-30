import React from 'react'
import { useDataContext } from '../hooks/useDataContext';
import { PlayIcon, ChevronRightIcon, ChevronLeftIcon, QueueListIcon } from '@heroicons/react/solid'

import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { HiOutlineQueueList, HiForward } from "react-icons/hi2";

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
          <HiForward
            style={{
              color: 'white',
              transform: 'scaleX(-1)',
              fontSize: '24px',
              alignSelf: 'center',
            }}
          />
          <PlayIcon
            style={{
              color: 'white',
              padding: '0px 19px 0px 19px'
            }}
          />
          <HiForward
            style={{
              color: 'white',
              fontSize: '24px',
              alignSelf: 'center',
            }}
          />
        </div>
      </div>


      <div
        style={{
          backgroundColor: 'pink',
          height: '100%',
          width: '29%',
          display: 'flex',
          justifyContent: 'right',
          color: 'white',
          paddingRight: '26px',
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: '30px',
          paddingTop: '12px',
        }}
      >
        <HiOutlineQueueList />
      </div>

    </div>
  )
}

export default Lowbar

// onClick={() => {
//   dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'QueueView' })
// }}