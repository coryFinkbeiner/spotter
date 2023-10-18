import React from 'react'

function CollectionElement({
  key,
  collectionData
}) {


  return (
    <div
        style={{
          backgroundColor: 'red',
          height: '194px',
          padding: '2px',


        }}
      >
        <img
          src={collectionData.imageURL}
          style={{
            height: '140px',
            // margin: '3px'
          }}
        />


      </div>
  )
}

export default CollectionElement