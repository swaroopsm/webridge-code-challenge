import React from 'react';
import cx from 'classnames';

import { useSidebar } from 'components/SidebarProvider';

interface Props {
  icon: React.FunctionComponent<React.ComponentProps<'svg'>>;
  label: string;
  active?: boolean;
}

export function SidebarItem({ icon: Icon, label, active }: Props) {
  const { expanded } = useSidebar();

  return (
    <div
      className={cx(
        'px-2 border-l-[3px] border-solid',
        active ? 'border-light-interactive-primary' : 'border-transparent'
      )}
    >
      <a
        className={cx(
          'flex gap-4 items-center px-2 py-[10px] rounded-lg cursor-pointer hover:bg-light-surface-hovered',
          {
            'bg-light-surface-selection-primary border-l-light-interactive-primary hover:bg-light-surface-selection-primary-hovered':
              active,
          }
        )}
      >
        <Icon
          className={cx('text-light-icon flex-shrink-0', {
            'text-light-interactive-primary': active,
          })}
        />
        <span
          className={cx(
            'hidden text-light-text text-sm font-semibold',
            expanded && 'md:inline-block'
          )}
        >
          {label}
        </span>
      </a>
    </div>
  );
}
