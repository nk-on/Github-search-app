import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ColorSwitcher from './color-switcher/mode-switcher';
import PlaceHolder from './placeholder/placeholder';
import './App.css';

function App() {
  return (
    <>
      <div className='flex flex-col items-center gap-[10px]'>
        <ColorSwitcher />
      </div>
    </>
  );
}

export default App;
