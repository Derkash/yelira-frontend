'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type TabSlug = 'femme' | 'homme' | 'enfant';

interface ActiveTabContextType {
  activeTab: TabSlug;
  setActiveTab: (tab: TabSlug) => void;
}

const ActiveTabContext = createContext<ActiveTabContextType>({
  activeTab: 'femme',
  setActiveTab: () => {},
});

export function ActiveTabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabSlug>('femme');
  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
}

export function useActiveTab() {
  return useContext(ActiveTabContext);
}
