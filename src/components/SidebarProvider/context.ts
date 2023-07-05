import React, { useContext } from 'react';

export const SidebarContext = React.createContext<{
  expanded: boolean;
  toggleSidebar?: () => void;
}>({
  expanded: true,
});

export const useSidebar = () => {
  return useContext(SidebarContext);
};