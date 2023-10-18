import React from 'react'

function RenderBox({
  children,
  columnAmount,
}) {

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columnAmount}, 1fr)`,
        gridGap: '2px',
        position: 'absolute',
        overflowY: 'scroll',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: '2px'
      }}
    >
      {children}
    </div>
  )

}

export default RenderBox