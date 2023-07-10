import React, { useState, useCallback, useMemo } from 'react';

import { SidebarContext } from './context';

interface Props {
  children: React.ReactNode;
}

export function SidebarProvider({ children }: Props) {
  const [value, setValue] = useState({
    expanded: true,
    isHamburgerMenuOpen: false,
  });

  const toggleSidebar = useCallback(() => {
    setValue((value) => ({
      ...value,
      expanded: !value.expanded,
    }));
  }, [setValue]);

  const toggleHamburgerMenu = useCallback(() => {
    setValue((value) => ({
      ...value,
      isHamburgerMenuOpen: !value.isHamburgerMenuOpen,
    }));
  }, [setValue]);

  const memoizedValue = useMemo(() => {
    return {
      ...value,
      toggleSidebar,
      toggleHamburgerMenu,
    };
  }, [value, toggleSidebar, toggleHamburgerMenu]);

  return (
    <SidebarContext.Provider value={memoizedValue}>
      {children}
    </SidebarContext.Provider>
  );
}
