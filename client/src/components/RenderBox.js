import React from 'react'

function RenderBox({
  children,
  itemType,
}) {

  const commonStyle = {
    display: 'grid',
    gridGap: '2px',
    position: 'absolute',
    overflowY: 'scroll',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: '2px',
  };

  const collectionStyle = {
    ...commonStyle,
    gridTemplateColumns: 'repeat(2, 1fr)',
    // gridTemplateRows: 'repeat(auto-fill, 100px)'
  };

  const trackStyle = {
    ...commonStyle,
    gridTemplateColumns: 'repeat(3, 1fr)',
  };

  const selectedStyle = itemType === 'collection' ? collectionStyle : trackStyle;

  return (
    <div style={selectedStyle}>
      {children}
    </div>
  );

}

export default RenderBox