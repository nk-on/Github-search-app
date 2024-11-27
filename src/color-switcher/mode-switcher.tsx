import { useState } from 'react';
import moon from '../../src/assets/moon.svg';
import sun from '../../src/assets/sun.svg';
import SearchBar from '../search-bar/searchBar';
export default function ModeSwitcher() {
  const [mode, setMode] = useState<string>('Day');
  function colorSwitch(style1:string,style2:string):string{
    return mode === 'Day' ? style1:style2
  }
  return (
    <>
      <div className="Color-switcher w-[90%] h-[30vh] flex justify-around items-center cursor-pointer	">
        <h2 className={colorSwitch('text-[#222731]','text-white')}>
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
      <SearchBar />
    </>
  );
}
