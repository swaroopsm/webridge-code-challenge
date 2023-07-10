import React from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from 'components/Sidebar';
import { SidebarProvider } from 'components/SidebarProvider';
import { MobileSidebarToggleControl } from 'components/MobileSidebarToggleControl';

export function RootPage() {
  return (
    <div className="flex relative">
      <SidebarProvider>
        <Sidebar />

        <div className="p-5 flex-1 pb-[1000px]">
          <MobileSidebarToggleControl />

          <main>
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
