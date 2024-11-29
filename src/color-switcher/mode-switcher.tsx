import { useState } from 'react';
import moon from '../../src/assets/moon.svg';
import sun from '../../src/assets/sun.svg';
import SearchBar from '../search-bar/searchBar';
import { ColorSwitch } from '../style-switcher/style-switcher';

export default function ModeSwitcher() {
  const [mode, setMode] = useState<string>('Day');
  return (
    <>
      <div className="Color-switcher w-[90%] h-[30vh] flex justify-around items-center cursor-pointer	">
        <h2 className={ColorSwitch(mode, 'text-[#222731]', 'text-white')}>
          Devfinder
        </h2>
        <div
          className="Icon"
          onClick={(): void => {
            mode === 'Day' ? setMode('Night') : setMode('Day');
            mode === 'Day'
              ? (document.body.style.backgroundColor = '#141D2F')
              : (document.body.style.backgroundColor = '#F6F8FF');
          }}
        >
          {mode === 'Day' ? <img src={moon} /> : <img src={sun} />}
        </div>
      </div>
      <SearchBar colorSwitch={ColorSwitch} mode = {mode} />
    </>
  );
}
