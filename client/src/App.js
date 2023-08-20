import Login from './components/Login'
import Dashboard from "./components/Dashboard"
import './App.css';
import { useDataContext } from './hooks/useDataContext'
import React, { useEffect} from 'react'
import AppLogin from './components/AppLogin'





// function App() {
//   const newCode = new URLSearchParams(window.location.search).get("code")
//   const { code, dispatch } = useDataContext()

//   useEffect(() => {
//     if (newCode) dispatch({type: 'SET_CODE' , payload: newCode })
//   }, [])

//   return code ? <Dashboard /> : <Login />
// }






import { Container, Row, Col } from 'react-bootstrap';

function App() {

  return (
    <Container>
      <Row>
        <Col xs={3} style={{ backgroundColor: 'lightblue' }}>
          {/* First Column (24%) */}
          First Column
        </Col>
        <Col xs={4} style={{ backgroundColor: 'lightgreen' }}>
          {/* Second Column (38%) */}
          Second Column
        </Col>
        <Col xs={4} style={{ backgroundColor: 'lightpink' }}>
          {/* Third Column (38%) */}
          Third Column
        </Col>
      </Row>
    </Container>
  );

}




// function App() {

//   return <AppLogin />

// }





export default App;


// you could have a bottom bar that has the next *five songs listed, like a sportscenter ticker. you could drag songs directly there.
// maybe you could also swipe left (and right) to see the full playlist.
// this would only make sense if you had the multiple queue idea in place, because otherwise it feels redundant to have two persistent views of the upcoming tracks.


// i think i would rather have the right click idea, to save on space. but you could also add advanced options with [...]



// you could let people set YEAR bombs too...
  // The artist and year filters can be used while searching albums, artists and tracks. You can filter on a single year or a range (e.g. 1955-1960).