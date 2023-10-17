import React from 'react'

function TrackElement({
  trackData,
  key,
}) {



  const Layout = ({ children }) => {


    return (
      <div
        style={{
          backgroundColor: 'orange',
          height: '63px',

        }}
      >
        <img
          src={trackData.imageURL}
          style={{
            height: '63px'
          }}
        />

        <div
          style={{

          }}
        >
        </div>
      </div>
    )
  }





  return (
    <Layout>

    </Layout>
  )
}

export default TrackElement