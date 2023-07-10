import React from 'react';
import cx from 'classnames';

import { useSidebar } from 'components/SidebarProvider';

import { SidebarItem } from './SidebarItem';

interface Props {
  title?: string;
  items: React.ComponentProps<typeof SidebarItem>[];
}

export function SidebarSection({ title, items }: Props) {
  const { expanded } = useSidebar();
  console.log({ expanded });

  return (
    <div>
      {title && (
        <h3
          className={cx(
            'text-xs text-light-primary font-semibold pb-2 pl-4 hidden',
            expanded && 'lg:inline-block'
          )}
        >
          {title}
        </h3>
      )}
      {items.map((item) => (
        <SidebarItem key={item.label} {...item} />
      ))}
    </div>
  );
}
