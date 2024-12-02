import { useEffect, useState } from 'react';
import PlaceHolder from '../placeholder/placeholder';
import { ColorSwitch } from '../style-switcher/style-switcher';
// import 'dotenv/config'
export default function SearchBar({ mode }: { mode: string }) {
  const [searchOn,setSearchOn] = useState(false);
  const [query,setQuery] = useState('');
  async function fetchData():Promise<unknown | void>{
    if(query.length){
      const res = await fetch(`https://api.github.com/users/${query}`,{
        headers:{
          Authorization:`Bearer ${import.meta.env.VITE_REACT_APP_GITHUB_TOKEN}`,
        }
      });
      const data = await res.json();
      console.log(data)
      return data
    }else{
      return;
    }
  }
  useEffect(()=>{
    fetchData();
  },[searchOn])
  return (
    <>
      <div className="w-full flex justify-center">
        <form>
          <input
            type="text"
            placeholder="Search GitHub username…"
            className={`w-[80%] h-[50px] md:w-[573px]  rounded-[12px] ${ColorSwitch(
              mode,
              'bg-white',
              'bg-[#1E2A47]'
            )}`}
            onChange={(event)=>{
              setQuery(event.target.value)
            }}
          />
          <button className="bg-[#0079FF] w-[106px] h-[50px] text-white font-bold	rounded-[12px]" onClick={(e)=>{
            e.preventDefault();
            setSearchOn(true);
          }}>
            Search
          </button>
        </form>
      </div>
      <PlaceHolder mode={mode} />
    </>
  );
}
