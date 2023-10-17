import React from 'react';

const Container = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto', // Three rows: auto for TopBar, 1fr for Middle, auto for PlayerBar
      height: '100vh', // Full height of the viewport
    }}
  >
    {children}
  </div>
);

const TopBar = () => (
  <div
    style={{
      backgroundColor: 'blue', // Add your styles for TopBar
      height: '60px', // Adjust the height as needed
    }}
  >
    TopBar
  </div>
);

const Middle = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'auto 2fr auto', // Three columns: auto for LeftBar, 2fr for Center, auto for RightBar
      gridGap: '16px', // Gap between columns
    }}
  >
    {children}
  </div>
);

const LeftBar = () => (
  <div
    style={{
      backgroundColor: 'green', // Add your styles for LeftBar
    }}
  >
    LeftBar
  </div>
);

const Center = () => (
  <div
    style={{
      backgroundColor: 'yellow', // Add your styles for Center
    }}
  >
    Center
  </div>
);

const RightBar = () => (
  <div
    style={{
      backgroundColor: 'orange', // Add your styles for RightBar
    }}
  >
    RightBar
  </div>
);

const PlayerBar = () => (
  <div
    style={{
      backgroundColor: 'red', // Add your styles for PlayerBar
      height: '60px', // Adjust the height as needed
    }}
  >
    PlayerBar
  </div>
);

function Application() {
  return (
    <Container>
      <TopBar />

      <Middle>
        <LeftBar />
        <Center />
        <RightBar />
      </Middle>

      <PlayerBar />
    </Container>
  );
}

export default Application;
