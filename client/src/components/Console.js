import React from 'react'
import MySpotify from './MySpotify'
import SpotifySidebar from './SpotifySidebar'

const Layout = ({children}) => {

  const [ left, right ] = React.Children.toArray(children);

  return (
    <div
      style={{
        height: '100%',
        backgroundColor: 'red',
        color: 'white',
        display: 'grid',
        gridTemplateColumns: '1fr 2.25fr',
        padding: '2px',
        columnGap: '2px'
      }}
    >
      <div
        style={{
          backgroundColor: 'blue',
          height:'100%',
        }}
      >{left}</div>
      <div
        style={{
          backgroundColor: 'pink',
          height:'100%'
        }}
      >{right}</div>
    </div>
  )
}

function Console() {
  return (
    <Layout>
      <SpotifySidebar />
      <MySpotify />
    </Layout>
  )
}

export default Console

// MyNotes * SpotifySidebar slide