import Login from './components/Login'
import Dashboard from "./components/Dashboard"
import './App.css';
import { useDataContext } from './hooks/useDataContext'
import React, { useEffect, useState } from 'react'


function App() {

  const code = new URLSearchParams(window.location.search).get("code")


  const { dispatch } = useDataContext()

  useEffect(() => {

    dispatch({type: 'SET_CODE' , payload: code })

  }, [code, dispatch])

  return code ? <Dashboard /> : <Login />
}

export default App;
