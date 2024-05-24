interface Note {
  name: string;
  min: number;
  max: number;
  perfectMin: number;
  perfectMax: number;
}

export const guitarStringRanges: Note[] = [
  { name: "E2", min: 80.0, max: 85.0, perfectMin: 82.0, perfectMax: 82.8 },
  { name: "A2", min: 105.0, max: 120.0, perfectMin: 109.7, perfectMax: 110.3 },
  { name: "D3", min: 137.0, max: 155.0, perfectMin: 146.3, perfectMax: 147.0 },
  { name: "G3", min: 194.0, max: 198.0, perfectMin: 195.7, perfectMax: 196.3 },
  { name: "B3", min: 244.0, max: 250.0, perfectMin: 245.7, perfectMax: 246.3 },
  { name: "E4", min: 326.0, max: 332.0, perfectMin: 328.7, perfectMax: 329.3 },
];
