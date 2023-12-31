import React from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import { useSidebar } from 'components/SidebarProvider';

interface Props {
  icon: React.FunctionComponent<React.ComponentProps<'svg'>>;
  label: string;
  href: string;
}

export function SidebarItem({ icon: Icon, label, href }: Props) {
  const { expanded, isHamburgerMenuOpen } = useSidebar();

  return (
    <NavLink
      to={href}
      className="block rounded-lg outline-none focus-visible:shadow-sidebar-item-light-focussed dark:focus-visible:shadow-sidebar-item-dark-focussed focus-visible:z-10 relative"
    >
      {({ isActive }) => (
        <div
          className={cx(
            'px-2 border-l-[3px] border-solid',
            isActive
              ? 'border-light-interactive-primary dark:border-dark-interactive-primary'
              : 'border-transparent'
          )}
        >
          <div
            className={cx(
              'flex gap-4 items-center px-2 py-[10px] rounded-lg cursor-pointer hover:bg-light-surface-hovered dark:hover:bg-dark-surface-hovered active:bg-light-surface-pressed dark:active:bg-dark-surface-pressed ',
              isActive &&
                'bg-light-surface-selection-primary dark:bg-dark-surface-selection-primary border-l-light-interactive-primary hover:bg-light-surface-selection-primary-hovered dark:hover:bg-dark-surface-selection-primary-hovered'
            )}
          >
            <Icon
              className={cx(
                'text-light-icon flex-shrink-0 dark:text-dark-icon',
                {
                  'text-light-interactive-primary dark:text-dark-interactive-primary':
                    isActive,
                }
              )}
            />

            {!expanded && <span className="sr-only">{label}</span>}

            <span
              className={cx(
                'text-light-text text-sm font-semibold dark:text-dark-text sm:hidden',
                expanded ? 'lg:inline-block' : 'lg:hidden',
                isHamburgerMenuOpen ? 'inline-block' : 'hidden'
              )}
            >
              {label}
            </span>
          </div>
        </div>
      )}
    </NavLink>
  );
}
