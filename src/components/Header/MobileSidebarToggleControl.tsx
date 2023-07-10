import React from 'react';

import { ReactComponent as IconHamburger } from 'assets/icons/hamburger.svg';
import { useSidebar } from 'components/SidebarProvider';

export function MobileSidebarToggleControl() {
  const sidebar = useSidebar();

  return (
    <button
      onClick={sidebar.toggleHamburgerMenu}
      aria-label="Open sidebar"
      className="sm:hidden text-light-icon dark:text-dark-icon"
    >
      <IconHamburger />
    </button>
  );
}
