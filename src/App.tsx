import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import PlaceHolder from './placeholder/placeholder';
import './App.css';
import ModeSwitcher from './color-switcher/mode-switcher';

function App() {
  const [mode, setMode] = useState<string>('Day');
  return (
    <>
      <div className='flex flex-col items-center gap-[10px]'>
        <ModeSwitcher mode = {mode} setMode = {setMode}/>
      </div>
    </>
  );
}

export default App;
