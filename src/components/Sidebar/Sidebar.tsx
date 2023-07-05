import React from 'react';

import { ReactComponent as LogoSmall } from 'assets/logo-small.svg';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as IconDashboard } from 'assets/icons/dashboard.svg';
import { ReactComponent as IconCatalogs } from 'assets/icons/catalogs.svg';
import { ReactComponent as IconVendors } from 'assets/icons/vendors.svg';
import { ReactComponent as IconUsers } from 'assets/icons/users.svg';
import { ReactComponent as IconViews } from 'assets/icons/views.svg';
import { ReactComponent as IconTenants } from 'assets/icons/tenants.svg';
import { ReactComponent as IconApplications } from 'assets/icons/applications.svg';

import { SidebarSection } from './SidebarSection';

export function Sidebar() {
  return (
    <aside className="w-[256px] bg-white h-screen">
      <div className="py-5 px-4 bg-light-surface-neutral-subdued flex items-center justify-center">
        {/* <LogoSmall /> */}
        <Logo />
      </div>

      <div className="py-4 px-1">
        <SidebarSection
          items={[
            {
              icon: IconDashboard,
              label: 'Dashboard',
              active: true,
            },
          ]}
        />

        <SidebarSection
          title="Content"
          items={[
            {
              icon: IconCatalogs,
              label: 'Catalogs',
            },
            {
              icon: IconVendors,
              label: 'Vendors',
            },
          ]}
        />

        <SidebarSection
          title="User Management"
          items={[
            {
              icon: IconUsers,
              label: 'Users',
            },
            {
              icon: IconViews,
              label: 'Views',
            },
          ]}
        />

        <SidebarSection
          title="Other"
          items={[
            {
              icon: IconTenants,
              label: 'Tenants',
            },
            {
              icon: IconApplications,
              label: 'Applications',
            },
          ]}
        />
      </div>
    </aside>
  );
}
