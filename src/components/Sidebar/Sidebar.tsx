import React, { useEffect } from 'react';
import cx from 'classnames';
import { useLocation, NavLink } from 'react-router-dom';

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
import { ReactComponent as IconClose } from 'assets/icons/close.svg';

import { useSidebar } from 'components/SidebarProvider';
import { RoutePath } from 'routes/types';

import { SidebarSection } from './SidebarSection';

export function Sidebar() {
  const { expanded, isHamburgerMenuOpen, toggleSidebar, toggleHamburgerMenu } =
    useSidebar();
  const location = useLocation();

  // Hide sidebar on page navigation
  useEffect(() => {
    if (isHamburgerMenuOpen) {
      toggleHamburgerMenu();
    }
  }, [location]);

  // Disable body scroll when hamburger menu is open
  useEffect(() => {
    if (isHamburgerMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isHamburgerMenuOpen]);

  return (
    <>
      {isHamburgerMenuOpen && (
        <div
          className="absolute w-full h-full bg-red"
          onClick={toggleHamburgerMenu}
        />
      )}
      <aside
        className={cx(
          'sm:w-[60px] w-0',
          expanded ? 'lg:w-[256px]' : 'lg:w-[60px]'
        )}
      >
        <div
          className={cx(
            'fixed bg-light-surface dark:bg-dark-surface h-screen font-display transition-all sm:translate-x-0 w-[256px] overflow-auto',
            'sm:w-[60px]',
            expanded ? 'lg:w-[256px]' : 'lg:w-[60px]',
            isHamburgerMenuOpen ? 'translate-x-0' : 'translate-x-[-256px]'
          )}
        >
          <div className="py-5 px-4 bg-light-surface-neutral-subdued dark:bg-dark-surface-neutral-subdued flex items-center justify-center sm:relative sticky top-0">
            <button
              className={cx(
                isHamburgerMenuOpen ? null : 'hidden',
                'absolute left-5 sm:hidden'
              )}
              onClick={toggleHamburgerMenu}
            >
              <IconClose />
            </button>

            <NavLink to={RoutePath.Dashboard} aria-label="Webridge logo">
              <LogoSmall
                className={cx(
                  isHamburgerMenuOpen && 'hidden',
                  expanded ? 'lg:hidden' : 'lg:block',
                  'sm:block'
                )}
              />
              <Logo
                className={cx(
                  'sm:hidden',
                  isHamburgerMenuOpen ? null : 'hidden',
                  expanded ? 'lg:block' : null
                )}
              />
            </NavLink>
          </div>

          <div className="py-4 px-1 flex flex-col gap-4">
            <SidebarSection
              items={[
                {
                  icon: IconDashboard,
                  label: 'Dashboard',
                  href: RoutePath.Dashboard,
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
              className="p-4 hidden lg:flex justify-end w-full hover:bg-light-surface-hovered dark:hover:bg-dark-surface-hovered"
            >
              <IconChevron className={cx(!expanded && 'rotate-180')} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
