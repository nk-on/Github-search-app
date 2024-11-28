interface SearchBarProp{
  colorSwitch:(style1:string,style2:string)=>string;
}
export default function SearchBar({colorSwitch}:SearchBarProp) {
  console.log(colorSwitch)
  return (
    <div className="w-full flex justify-center">
      <form>
        <input
          type="text"
          placeholder="Search GitHub username…"
          className={`w-[80%] h-[50px] md:w-[573px] bg-[#FEFEFE] rounded-[12px] ${colorSwitch('bg-white','bg-[#1E2A47]')}`}
        />
        <button className="bg-[#0079FF] w-[106px] h-[50px] text-white font-bold	rounded-[12px]">Search</button>
      </form>
    </div>
  );
}
