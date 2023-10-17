import React from 'react'
import Console from './Console'
import Dash from './Dash'
import PlayerBar from './PlayerBar'
import BeatBar from './BeatBar'
import Layout from './Layout'


function Application() {
  return (
    <Layout>
      <Dash />
      <Console />
      <BeatBar />
      <PlayerBar />
    </Layout>
  )
}

export default Application

// might want to move the Layout to index.js... or something.