import React from 'react';
import cx from 'classnames';

interface Props {
  icon: React.FunctionComponent<React.ComponentProps<'svg'>>;
  label: string;
  active?: boolean;
}

export function SidebarItem({ icon: Icon, label, active }: Props) {
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
          className={cx('text-light-icon', {
            'text-light-interactive-primary': active,
          })}
        />
        <span className="text-light-text text-sm font-semibold">{label}</span>
      </a>
    </div>
  );
}
