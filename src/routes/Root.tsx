import { Outlet } from 'react-router-dom';

import { Sidebar } from 'components/Sidebar';
import { SidebarProvider } from 'components/SidebarProvider';
import { Header } from 'components/Header';

export function RootPage() {
  return (
    <div className="flex relative">
      <SidebarProvider>
        <Sidebar />

        <div className="p-5 flex-1 pb-[1000px]">
          <Header />

          <main className="mt-8">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
