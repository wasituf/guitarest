interface Note {
  name: string;
  min: number;
  max: number;
  perfectMin: number;
  perfectMax: number;
}

export const guitarStringRanges: Note[] = [
  { name: "E2", min: 77.0, max: 88.0, perfectMin: 81.8, perfectMax: 83.0 },
  { name: "A2", min: 105.0, max: 120.0, perfectMin: 109.3, perfectMax: 110.5 },
  { name: "D3", min: 137.0, max: 155.0, perfectMin: 146.0, perfectMax: 147.2 },
  { name: "G3", min: 190.0, max: 205.0, perfectMin: 195.3, perfectMax: 196.5 },
  { name: "B3", min: 240.0, max: 252.0, perfectMin: 245.3, perfectMax: 246.5 },
  { name: "E4", min: 323.0, max: 335.0, perfectMin: 328.3, perfectMax: 329.5 },
];
