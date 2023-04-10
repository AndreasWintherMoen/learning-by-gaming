import React, {useMemo} from 'react';
import useTheme from "../hooks/useTheme";
import getFunction from "../utils/getFunction";
import {SupportedFunctions} from "../types";


interface FunctionInputPickerProps {
  amplitude: number;
  angularFrequency: number;
  phaseShift: number;
  verticalShift: number;
  isFiring: boolean;
  selectedFunction: SupportedFunctions;
}
export default function SineFunctionIndicator({ amplitude, angularFrequency, phaseShift, verticalShift, selectedFunction }: FunctionInputPickerProps) {
  const theme = useTheme();

  const XMAX = 350;
  const YMAX = 50;
  const func = getFunction(selectedFunction);

  const pathString = useMemo(() => {
    const path = [];
    for (let x = 0; x <= XMAX; x++) {
      const angle = (x / XMAX) * Math.PI * 2;  // angle = 0 -> 2π
      const y = -1 * amplitude * func(angularFrequency * angle + phaseShift) * (YMAX / 2) + (YMAX / 2) + verticalShift * -10
      // M = move to, L = line to
      path.push((x == 0 ? 'M' : 'L') + x.toFixed(2) + ',' + y.toFixed(2));
    }
    return path.join(' ');
  }, [amplitude, angularFrequency, phaseShift, verticalShift, selectedFunction]);

  return (
      <div style={{ marginRight: 12, boxSizing:'border-box', height: 110, width: 200, overflow:'hidden', zIndex:1000, display:'flex', alignItems:'center'}}>
        <svg viewBox="0 0 500 50" overflow={'visible'} >
          <path strokeWidth={5} stroke={theme.text.primary} fill="none" d={pathString} />
        </svg>
      </div>
  );
}
