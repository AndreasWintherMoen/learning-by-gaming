import { createContext, ReactNode, useContext, useState } from 'react';

export type DataContext = {
  amplitude: number;
  angularFrequency: number;
  phaseShift: number;
  setAmplitude: (amplitude: number) => void;
  setAngularFrequency: (angularFrequency: number) => void;
  setPhaseShift: (phaseShift: number) => void;
};

export const DataContext = createContext<DataContext>({
  amplitude: 1,
  angularFrequency: 1,
  phaseShift: 0,
  setAmplitude: () => {},
  setAngularFrequency: () => {},
  setPhaseShift: () => {},
});

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [amplitude, setAmplitude] = useState(1);
  const [angularFrequency, setAngularFrequency] = useState(1);
  const [phaseShift, setPhaseShift] = useState(0);

  return (
    <DataContext.Provider
      value={{
        amplitude,
        angularFrequency,
        phaseShift,
        setAmplitude,
        setAngularFrequency,
        setPhaseShift,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
