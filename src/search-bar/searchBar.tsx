import { ColorSwitch } from '../style-switcher/style-switcher';
export default function SearchBar({ mode }: { mode: string }) {
  console.log(mode);
  return (
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
        />
        <button className="bg-[#0079FF] w-[106px] h-[50px] text-white font-bold	rounded-[12px]">
          Search
        </button>
      </form>
    </div>
  );
}
