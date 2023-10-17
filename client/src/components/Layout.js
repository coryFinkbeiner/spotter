
import React from 'react';


function Layout({ children }) {

  const [ one, two, three, four ] = React.Children.toArray(children);


  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gridTemplateRows: '7fr 1fr',
        height: '100vh',

      }}
    >

     <div
        style={{
          // backgroundColor: 'red',

        }}
      >
        {one}
      </div>

      <div
        style={{
          backgroundColor: 'grey',

        }}
      >
        {two}
      </div>

      <div
        style={{
          // backgroundColor: 'blue',

        }}
      >
        {three}
      </div>

      <div
        style={{
          backgroundColor: 'green',
        }}
      >
        {four}
      </div>






    </div>
  );
}



export default Layout;







// import React from 'react';

// const Container = ({ children }) => (
//   <div
//     style={{
//       display: 'grid',
//       gridTemplateColumns: '1fr 2fr',
//       height: '100vh', // Full height of the viewport
//     }}
//   >
//     {children}
//   </div>
// );




// const Right = ({ children }) => (
//   <div
//     style={{
//       backgroundColor: 'orange', // Add your styles for RightBar
//     }}
//   >
//     {children}
//   </div>
// );

// const  RightLowbar = ({ children }) => (
//   <div
//     style={{
//       backgroundColor: 'grey', // Add your styles for TopBar
//       height: '60px', // Adjust the height as needed
//     }}
//   >
//     {children}
//   </div>
// );

// const  RightSidebar = ({ children }) => (
//   <div
//     style={{
//       backgroundColor: 'red', // Add your styles for TopBar
//       height: '60px', // Adjust the height as needed
//     }}
//   >
//     {children}
//   </div>
// );


// const Left = ({ children }) => (
//   <div
//     style={{
//       backgroundColor: 'green',
//       display: 'grid',
//       gridTemplateRows: '7fr 1fr',
//     }}
//   >
//     {children}
//   </div>
// );

// const LeftConsole = ({ children }) => (
//   <div
//     style={{
//       backgroundColor: 'purple',
//     }}
//   >

//     {children}
//   </div>
// );

// const LeftLowbar = ({ children }) => (
//   <div
//     style={{
//       backgroundColor: 'blue',
//     }}
//   >
//     {children}
//   </div>
// );




// function Layout() {
//   return (
//     <Container>

//       <Left>

//         <LeftConsole>
//         </LeftConsole>

//         <LeftLowbar>
//         </LeftLowbar>

//       </Left>


//       <Right>
//       </Right>

//     </Container>
//   );
// }

// export default Layout;



