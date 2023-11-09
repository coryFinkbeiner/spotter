import React, { useEffect, useState } from 'react';
import { useData } from '../DataProvider';
import { Link } from "react-router-dom";

function MyAlbums() {
  const { myAlbums } = useData();

  return (
    myAlbums?.items.map((item, index) => (
      // <Link
      //   to={`/vans/${van.id}`}
      //   key={van.id}
      // >

        <div
          style={{
            backgroundColor: 'red',
            // height: '22vh',
            // height: '100%',
            padding: '2px',
            display: 'grid',
            gridTemplateRows: '3fr 1fr',
          }}
        >

          <div
            style={{
              backgroundImage: `url(${item.album.images[0].url})`,
              backgroundSize: 'cover', // Options: 'auto', 'contain', 'cover', or specific values like '50% 50%'
              backgroundPosition: 'center',

              height: '118px',
              width: ' 118px',
            }}
          >

          </div>

          <div
            style={{
              backgroundColor: 'white',
            }}
          >
          </div>

        </div>

      // </Link>
    ))
  )
}

export default MyAlbums