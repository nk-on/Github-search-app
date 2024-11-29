
export interface SearchBarProp {
    colorSwitch: (mode: string, style1: string, style2: string) => string;
    mode:string
}
export function ColorSwitch(mode: string, style1: string, style2: string): string {
    return mode === 'Day' ? style1 : style2;
}