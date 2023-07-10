import React, { useState, useCallback, useMemo, useEffect } from 'react';

import { useLocalStorage } from 'hooks';
import { SidebarContext } from './context';

interface Props {
  children: React.ReactNode;
}

// Here LS means LocalStorage
const SIDEBAR_EXPANDED_LS_KEY = '__webridge-sidebar-expanded';

export function SidebarProvider({ children }: Props) {
  const { setItem: setExpandedInLs, getItem: getExpnadedFromLs } =
    useLocalStorage(SIDEBAR_EXPANDED_LS_KEY);

  const [value, setValue] = useState({
    expanded: getExpnadedFromLs() === '0' ? false : true,
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

  useEffect(() => {
    setExpandedInLs(value.expanded ? '1' : '0');
  }, [value.expanded, setExpandedInLs]);

  return (
    <SidebarContext.Provider value={memoizedValue}>
      {children}
    </SidebarContext.Provider>
  );
}
