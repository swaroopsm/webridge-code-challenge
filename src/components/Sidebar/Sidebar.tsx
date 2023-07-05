import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoSmall } from 'assets/logo-small.svg';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as IconDashboard } from 'assets/icons/dashboard.svg';
import { ReactComponent as IconCatalogs } from 'assets/icons/catalogs.svg';
import { ReactComponent as IconVendors } from 'assets/icons/vendors.svg';
import { ReactComponent as IconUsers } from 'assets/icons/users.svg';
import { ReactComponent as IconViews } from 'assets/icons/views.svg';
import { ReactComponent as IconTenants } from 'assets/icons/tenants.svg';
import { ReactComponent as IconApplications } from 'assets/icons/applications.svg';
import { ReactComponent as IconChevron } from 'assets/icons/chevron.svg';

import { useSidebar } from 'components/SidebarProvider';
import { RoutePath } from 'routes/types';

import { SidebarSection } from './SidebarSection';

export function Sidebar() {
  const { expanded, toggleSidebar } = useSidebar();

  return (
    <aside
      className={cx(
        'w-[60px] bg-white h-screen relative',
        expanded && 'md:w-[256px]'
      )}
    >
      <div className="py-5 px-4 bg-light-surface-neutral-subdued flex items-center justify-center">
        <LogoSmall className={cx(expanded && 'md:hidden')} />
        <Logo className={cx('hidden', expanded && 'md:block')} />
      </div>

      <div className="py-4 px-1 flex flex-col gap-4">
        <SidebarSection
          items={[
            {
              icon: IconDashboard,
              label: 'Dashboard',
              href: RoutePath.Dashboard,
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
              href: RoutePath.Catalogs,
            },
            {
              icon: IconVendors,
              label: 'Vendors',
              href: RoutePath.Vendors,
            },
          ]}
        />

        <SidebarSection
          title="User Management"
          items={[
            {
              icon: IconUsers,
              label: 'Users',
              href: RoutePath.Users,
            },
            {
              icon: IconViews,
              label: 'Views',
              href: RoutePath.Views,
            },
          ]}
        />

        <SidebarSection
          title="Other"
          items={[
            {
              icon: IconTenants,
              label: 'Tenants',
              href: RoutePath.Tenants,
            },
            {
              icon: IconApplications,
              label: 'Applications',
              href: RoutePath.Applications,
            },
          ]}
        />
      </div>

      <div className="absolute right-0 bottom-0 w-full">
        <button
          aria-label={expanded ? 'Collape sidebar' : 'Expand sidebar'}
          onClick={toggleSidebar}
          className="p-4 hidden md:flex justify-end w-full hover:bg-light-surface-hovered"
        >
          <IconChevron className={cx(!expanded && 'rotate-180')} />
        </button>
      </div>
    </aside>
  );
}
