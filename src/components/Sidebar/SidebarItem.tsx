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
    <NavLink to={href}>
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
              {
                'bg-light-surface-selection-primary dark:bg-dark-surface-selection-primary border-l-light-interactive-primary hover:bg-light-surface-selection-primary-hovered dark:hover:bg-dark-surface-selection-selecteion-primary-hovered':
                  isActive,
              },
              'flex gap-4 items-center px-2 py-[10px] rounded-lg cursor-pointer hover:bg-light-surface-hovered dark:hover:bg-dark-surface-hovered'
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
