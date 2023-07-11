import React from 'react'
import MyQueue from './MyQueue'
import Search from './Search'
import Sidebar from './Sidebar'


function Dashboard() {

  return (
    <div>Dashboard
      <MyQueue />
      <Search />
      <Sidebar />
    </div>
  )
}

export default Dashboard