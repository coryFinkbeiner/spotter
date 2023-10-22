import React from 'react';
import Console from './Console';
import Dash from './Dash';
import PlayerBar from './PlayerBar';
import BeatBar from './BeatBar';
import AppLayout from './AppLayout';


function Application({ code }) {
  return (

      <AppLayout>
        <Dash />
        <Console />
        <BeatBar />
        <PlayerBar />
      </AppLayout>

  );
}

export default Application;