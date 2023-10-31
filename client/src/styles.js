
const renderBox = {
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

export const collectionsBox = {
  ...renderBox,
  gridTemplateColumns: 'repeat(2, 1fr)',
  // gridTemplateRows: 'repeat(auto-fill, 100px)'
};

export const tracksBox = {
  ...renderBox,
  gridTemplateColumns: 'repeat(3, 1fr)',
};

