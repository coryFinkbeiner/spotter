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
          display: 'grid',
          gridTemplateColumns: '1.5fr auto 5fr',
          padding: '1px'
        }}
      >

        {/* track number should overlay image */}
        <img
          src={trackData.imageURL}
          style={{
            height: '61px'
          }}
        />
        <div
          style={{
            backgroundColor: 'white',
            height: '100%',
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