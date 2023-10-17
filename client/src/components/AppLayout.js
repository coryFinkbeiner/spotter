
import React from 'react';


function AppLayout({ children }) {

  const [ one, two, three, four ] = React.Children.toArray(children);


  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gridTemplateRows: '7fr 1fr',
        height: '100vh',
        backgroundColor: 'black',
      }}
    >
      <div>{one}</div>
      <div>{two}</div>
      <div>{three}</div>
      <div>{four}</div>
    </div>
  );
}

export default AppLayout;