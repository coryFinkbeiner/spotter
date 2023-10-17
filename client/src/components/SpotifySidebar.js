import React from 'react'
import RenderBox from "./RenderBox"

function SpotifySidebar() {

  const Layout = ({ children }) => {

    return (
      <div
        style={{
          height: '100%',
          backgroundColor: 'pink',
          display: 'grid',
          gridTemplateRows: '1fr 2.42fr',
        }}
      >

        {/* Top */}
        <div
          style={{
            // height: '100%',
            backgroundColor: 'green'
          }}
        >
        </div>

        {/* RenderBox container */}
        <div
          style={{
            // height: '100%',
            backgroundColor: 'white'
          }}
        >{children}</div>
      </div>
    )
  }



  return (
    <Layout>

    </Layout>
  )
}

export default SpotifySidebar

// could have a * Radio for asterisking Spotify Collections you are interested in...
