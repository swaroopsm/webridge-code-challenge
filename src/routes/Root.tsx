import React from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from 'components/Sidebar';
import { SidebarProvider } from 'components/SidebarProvider';

export function RootPage() {
  return (
    <div className="flex">
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>

      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
}
