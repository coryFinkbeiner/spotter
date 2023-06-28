import Login from './components/Login'
import Dashboard from "./components/Dashboard"
import './App.css';
import { useDataContext } from './hooks/useDataContext'
import React, { useEffect } from 'react'


function App() {

  const code = new URLSearchParams(window.location.search).get("code")

  const { dispatch } = useDataContext()



  useEffect(() => {
    dispatch({type: 'SET_CODE' , payload: code })
  }, [code])

  // dispatch({type: 'SET_CODE' , payload: code })


  return code ? <Dashboard /> : <Login />
}

export default App;
