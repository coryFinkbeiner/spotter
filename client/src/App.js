import Login from './components/Login'
import Dashboard from "./components/Dashboard"
import './App.css';
import { useDataContext } from './hooks/useDataContext'
import React, { useEffect, useState } from 'react'


function App() {



  const newCode = new URLSearchParams(window.location.search).get("code")


  const { code, dispatch } = useDataContext()

  useEffect(() => {

    if (newCode) dispatch({type: 'SET_CODE' , payload: newCode })

  }, [])

  return code ? <Dashboard /> : <Login />
}

export default App;
