import Login from './components/Login'
import Dashboard from "./components/Dashboard"
import './App.css';
import { useDataContext } from './hooks/useDataContext'
import React, { useEffect} from 'react'


function App() {
  const newCode = new URLSearchParams(window.location.search).get("code")
  const { code, dispatch } = useDataContext()

  useEffect(() => {
    if (newCode) dispatch({type: 'SET_CODE' , payload: newCode })
  }, [])

  return code ? <Dashboard /> : <Login />
}

export default App;


// you could let people set YEAR bombs too...
  // The artist and year filters can be used while searching albums, artists and tracks. You can filter on a single year or a range (e.g. 1955-1960).