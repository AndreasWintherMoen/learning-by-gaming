import React from 'react';
import useTheme from "../hooks/useTheme";


interface FunctionInputPickerProps {
  amplitude: number;
  angularFrequency: number;
  phaseShift: number;
  verticalShift: number;
  isFiring: boolean;
}
export default function SineFunctionIndicator({ amplitude, angularFrequency, phaseShift, verticalShift }: FunctionInputPickerProps) {
  const theme = useTheme();

  const XMAX = 350;
  const YMAX = 50;

  const path = [];
  for (let x = 0; x <= XMAX; x++) {
    const angle = (x / XMAX) * Math.PI * 2;  // angle = 0 -> 2π
    const y = amplitude * Math.sin(angularFrequency * angle + phaseShift) * (YMAX / 2) + (YMAX / 2) + verticalShift * -10
    // M = move to, L = line to
    path.push((x == 0 ? 'M' : 'L') + x.toFixed(2) + ',' + y.toFixed(2));
  }
  const pathString = path.join(' ');

  return (
      <div style={{ marginRight: 12, boxSizing:'border-box', height: 110, width: 200, overflow:'hidden', zIndex:1000, display:'flex', alignItems:'center'}}>
        <svg viewBox="0 0 500 50" overflow={'visible'} >
          <path strokeWidth={5} stroke={theme.text.primary} fill="none" d={pathString} />
        </svg>
      </div>
  );
}
