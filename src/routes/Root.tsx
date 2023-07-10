import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Sidebar } from 'components/Sidebar';
import { SidebarProvider } from 'components/SidebarProvider';
import { MobileSidebarToggleControl } from 'components/MobileSidebarToggleControl';

export function RootPage() {
  return (
    <div className="flex relative">
      <SidebarProvider>
        <Sidebar />

        <div className="p-5">
          <MobileSidebarToggleControl />

          <main>
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
