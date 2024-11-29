import { ColorSwitch } from '../style-switcher/style-switcher';
export default function PlaceHolder({ mode }: { mode: string }) {
  return (
    <div
      className={`w-[90%] h-[419px] md:w-[730px] rounded-[15px] ${ColorSwitch(
        mode,
        'bg-white',
        'bg-[#1E2A47]'
      )}`}
    ></div>
  );
}
