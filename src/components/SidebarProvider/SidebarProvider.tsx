import React, { useState, useCallback } from 'react';

import { SidebarContext } from './context';

interface Props {
  children: React.ReactNode;
}

export function SidebarProvider({ children }: Props) {
  const [value, setValue] = useState({
    expanded: true,
  });

  const toggleSidebar = useCallback(() => {
    setValue((value) => ({
      ...value,
      expanded: !value.expanded,
    }));
  }, [setValue]);

  return (
    <SidebarContext.Provider
      value={{
        ...value,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
