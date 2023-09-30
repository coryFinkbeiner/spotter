import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';
import Playlists from './Playlists'
import Albums from './Albums';

function Sidebar() {
  const [radio, setRadio] = useState('history');
  const [results, setResults] = useState({}); // remnant?

  const { accessToken, dispatch, user } = useDataContext();

  const [isHovering, setIsHovering] = useState(false);

  const [calendarObject, setCalendarObject] = useState(null);


  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:3002/listening_history`, {
          params: {
            user_id: user.id,
          }
        });
        const groupedData = {};
        response.data.forEach((item) => {
          const date = new Date(item.play_time).toLocaleDateString();
          if (!groupedData[date]) {
            groupedData[date] = [];
          }
          groupedData[date].push(item);
        });
        setCalendarObject(groupedData);
        console.log({calendarObject})
      } catch (error) {
        console.error('Error fetching listening history:', error);
      }
    })();
  }, [])

  return (

    // Sidebar Container
    <div style={{
      flex: '0 0 240px',
      minWidth: '240px',
      margin: '6px',
      padding: '2px',
      height: '100vh',
    }}>

      {/* Navigation Bar */}
      <div
        style={{
          height: '15%',
          margin: '2px',
          padding: '2px',
          borderRadius: '8px',
          color: 'rgb(179, 179, 179)',
          paddingBottom: '8px',
          paddingLeft: '12px',
          paddingRight: '12px',
          paddingTop: '8px',
          backgroundColor: 'rgb(18, 18, 18)',
        }}
      >
        <div className='s-1-nav'>
          Home
        </div>
        <div className='s-1-nav'
          onClick={() => {
            dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'SearchView' })
          }}
          style={{
            cursor: 'pointer',
          }}
        >
          Search
        </div>

      </div>

      {/* Bottom section */}
      <div
        style={{
          backgroundColor: 'rgb(18, 18, 18)',
          height: '85%',
          margin: '2px',
          marginTop: '8px',
          borderRadius: '8px',
          color: 'rgb(179, 179, 179)',
          paddingBottom: '8px',
          paddingLeft: '12px',
          paddingRight: '12px',
          paddingTop: '8px',
        }}
      >
        <div className='s-2-1'>
          Your Library
        </div>
        <div className='s-2-2'>
          <div className='s-2-2-radio'
            onClick={() => setRadio('albums')}
            style={{
              cursor: 'pointer',
              backgroundColor: radio === 'albums' ? 'white' : 'rgba(255, 255, 255, 0.07)',
              color: radio === 'albums' ? 'black' : 'rgba(255, 255, 255)'
            }}
          >
            Albums
          </div>
          <div
            className='s-2-2-radio'
            onClick={() => setRadio('playlists')}
            style={{
              cursor: 'pointer',
              backgroundColor: radio === 'playlists' ? 'white' : 'rgba(255, 255, 255, 0.07)',
              color: radio === 'playlists' ? 'black' : 'rgba(255, 255, 255)'
            }}
          >
            Playlists
          </div>
          <div
            className='s-2-2-radio'
            onClick={() => setRadio('history')}
            style={{
              cursor: 'pointer',
              backgroundColor: radio === 'history' ? 'white' : 'rgba(255, 255, 255, 0.07)',
              color: radio === 'history' ? 'black' : 'rgba(255, 255, 255)'
            }}
          >
            History
          </div>
        </div>
        <div
          style={{
            overflowY: 'auto',
            zIndex: 1,
            height: '100%',
            scrollbarWidth: 'thin',
            scrollbarColor: 'transparent transparent',
          }}
        >
          {radio === 'albums' && (
            <Albums />
          )}
          {radio === 'playlists' && (
            <Playlists />
          )}

          {radio === 'history' && (

            <div className='sidebar-render'>

              {calendarObject &&
                Object.entries(calendarObject)
                  .map(([date, data]) => ({ date, data }))
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map(({ date, data }, index) => {

                    return (
                      <div className='sidebar-item-container'
                        key={index}
                        onClick={() => {
                          dispatch({ type: 'VIEW_IN_CONSOLE', payload: [date, data] })
                          dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'HistoryView' })
                        }}
                        style={{
                          cursor: 'pointer',
                          borderRadius: '6px',
                          color: 'white'

                        }}
                      >
                        <img
                          src={"https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd"}
                          style={{
                            borderRadius: '5px',
                            margin: '2px'
                          }}
                        />
                        <div
                          style={{
                            color: 'white',
                            marginLeft: '3px',
                            padding: '2px',
                          }}
                        >
                          <div
                            style={{
                              height: '50%',
                              fontWeight: 'bold',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {new Date(date).toLocaleDateString() === new Date().toLocaleDateString()
                              ? 'Today'
                              : date}
                          </div>
                        </div>
                      </div>
                    )
              })}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Sidebar;

