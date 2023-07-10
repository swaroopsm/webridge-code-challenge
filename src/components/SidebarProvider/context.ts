import React, { useContext } from 'react';

export const SidebarContext = React.createContext<{
  expanded: boolean;
  isHamburgerMenuOpen: boolean;
  toggleSidebar: () => void;
  toggleHamburgerMenu: () => void;
}>({
  expanded: true,
  isHamburgerMenuOpen: true,
  toggleSidebar: () => undefined,
  toggleHamburgerMenu: () => undefined,
});

export const useSidebar = () => {
  return useContext(SidebarContext);
};
