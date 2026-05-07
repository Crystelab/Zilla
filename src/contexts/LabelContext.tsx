import { createContext, useContext, ReactNode } from 'react';
import ViewLabel from '../components/sidebar/label/ViewLabel';
import AddLabel from '../components/sidebar/label/AddLabel';
import useLabels from '../hooks/useLabels';

const LabelContext = createContext({} as any);

export const LabelProvider = ({ children }: { children: ReactNode }) => {
  const { showLabel, dataLabel, showAddLabel, openLabel, closeLabel, createLabel, openAddLabel, refetchLabels } = useLabels();


  return (
    <LabelContext.Provider value={{ openLabel, openAddLabel, refetchLabels, closeLabel }}>
      {children}
      {showLabel && dataLabel && <ViewLabel closeBtn={closeLabel} data={dataLabel} />}
      {showAddLabel && <AddLabel closeBtn={closeLabel} newLabel={createLabel} />}
    </LabelContext.Provider>
  );
};

export const useLabelContext = () => {
  const context = useContext(LabelContext);
  if (!context) throw new Error('useLabelContext must be used within LabelProvider');
  return context;
};